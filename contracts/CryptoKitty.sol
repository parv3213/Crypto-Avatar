pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "./ERC721Token.sol";

contract Cryptokitty is ERC721Token {
    struct Kitty {
        uint256 id;
        uint256 generation;
        uint256 geneA;
        uint256 geneB;
    }
    mapping(uint256 => Kitty) private kitties;
    uint256 public nextId;
    address public admin;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _tokenURIBase
    ) public ERC721Token(_name, _symbol, _tokenURIBase) {
        admin = msg.sender;
    }

    function getAllKitties() external view returns (Kitty[] memory) {
        Kitty[] memory _kitties = new Kitty[](nextId);
        for (uint256 i = 0; i < nextId; i++) {
            _kitties[i] = kitties[i];
        }
        return _kitties;
    }

    function breed(uint256 _kitty1Id, uint256 _kitty2Id) external {
        require(
            _kitty1Id < nextId && _kitty2Id < nextId,
            "the two kitties must exists"
        );
        require(
            ownerOf(_kitty1Id) == msg.sender &&
                ownerOf(_kitty2Id) == msg.sender,
            "must be the owner of two kittie"
        );
        Kitty storage kitty1 = kitties[_kitty1Id];
        Kitty storage kitty2 = kitties[_kitty2Id];
        uint256 maxGen = kitty1.generation > kitty2.generation
            ? kitty1.generation
            : kitty2.generation;
        uint256 geneA = _random1(4) > 1 ? kitty1.geneA : kitty2.geneA;
        uint256 geneB = _random2(4) > 1 ? kitty1.geneB : kitty2.geneA;
        kitties[nextId] = Kitty(nextId, maxGen + 1, geneA, geneB);
        _mintKitty(msg.sender);
    }

    function mint() external {
        require(msg.sender == admin, "only admin");
        kitties[nextId] = Kitty(nextId, 1, _random1(10), _random2(10));
        _mintKitty(msg.sender);
    }

    function _random1(uint256 max) internal view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(block.timestamp, block.difficulty, now)
                )
            ) % max;
    }

    function _random2(uint256 max) internal view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(block.difficulty, block.timestamp, now)
                )
            ) % max;
    }

    function _mintKitty(address _owner) private {
        _mint(nextId, _owner);
        nextId++;
    }
}
