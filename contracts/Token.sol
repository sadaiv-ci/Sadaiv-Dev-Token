pragma solidity ^0.8.0;

contract SadaivDeveloperToken {
    uint256 constant public INITIAL_SUPPLY = 0;
    uint256 constant public MAX_COINS = 1500;
    uint256 constant public DESO_PRICE = 16; // Assuming DeSo price in USD
    uint256 constant public FOUNDER_REWARD_PERCENTAGE = 10; // Founder reward percentage

    mapping(address => uint256) public balances;
    address public founder;

    constructor() {
        founder = msg.sender;
    }

    function getPrice(uint256 currentSupply) public pure returns (uint256) {
        if (currentSupply >= MAX_COINS) {
            return type(uint256).max; // Return maximum value to represent infinite price
        }
        
        uint256 exponent = currentSupply * currentSupply / MAX_COINS;
        uint256 price = exponent * DESO_PRICE;
        
        return price;
    }
    
    function buyCoins(uint256 amount) external payable {
        require(amount > 0, "Invalid amount");
        require(amount + totalSupply() <= MAX_COINS, "Exceeds maximum supply");
        
        uint256 price = getPrice(totalSupply());
        uint256 cost = price * amount;
        require(msg.value >= cost, "Insufficient funds");
        
        // Mint and transfer the coins to the buyer
        balances[msg.sender] += amount;
        
        // Apply founder reward
        uint256 founderReward = cost * FOUNDER_REWARD_PERCENTAGE / 100;
        balances[founder] += founderReward;
        
        // Emit an event for the purchase
        emit BuyCoins(msg.sender, amount, cost);
    }
    
    function sellCoins(uint256 amount) external {
        require(amount > 0, "Invalid amount");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        uint256 price = getPrice(totalSupply() - amount);
        uint256 payout = price * amount;
        
        // Reduce the seller's balance
        balances[msg.sender] -= amount;
        
        // Transfer the payout amount to the seller
        payable(msg.sender).transfer(payout);
        
        // Emit an event for the sale
        emit SellCoins(msg.sender, amount, payout);
    }
    
    function totalSupply() public view returns (uint256) {
        return balances[founder];
    }
    
    event BuyCoins(address indexed buyer, uint256 amount, uint256 cost);
    event SellCoins(address indexed seller, uint256 amount, uint256 payout);
}
