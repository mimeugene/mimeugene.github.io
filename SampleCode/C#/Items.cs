using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Items : MonoBehaviour
{

    class Item
    {
        public string itemName;
        //public string description;
        //public Sprite icon;
        public int itemType;
        // 0-9 0 helm, 1 sword, 2, gloves, 3 chest, 4 trophy, 5 pants, 6 amulet, 7 left ring, 8 boots, 9 right ring
        public bool mod1;
        public bool mod2;
        public bool mod3;
        public bool mod4;
        public bool mod5;
        public bool mod6;
        public int roll1;
        public int roll2;
        public int roll3;
        public int roll4;
        public int roll5;
    }

    public void fetchNewItem()
    {
        Item item = new Item();
        item.itemName = "helm";
        item.itemType = 0;
        // 0-9 0 helm, 1 sword, 2, gloves, 3 chest, 4 trophy, 5 pants, 6 amulet, 7 left ring, 8 boots, 9 right ring
        item.mod1 = true;
        item.mod2 = false;
        item.mod3 = true;
        item.mod4 = false;
        item.mod5 = false;
        item.mod6 = false;
        item.roll1 = 3;
        item.roll2 = 2;
        item.roll3 = 0;
        item.roll4 = 0;
        item.roll5 = 0;
    }
    }
/*
Possible affixes

Platinum system (1m gold per platinum)
   
Normal items allow 4 affix

(Wealthy)Starting gold 25, 50, 75
(Lucky) Luck (increased chance of positive effects on stock you own, modifies all rng rolls slightly)
(Pocketed)increased stock 2% 4% 6%
(Sneaking)stealth 2% 4% 6%
(Strength)carry capacity 5, 10, 15
(Randomness)increased variance 2% 4% 6%
(Bartering)reduced vendor prices 2% 4% 6%

RARE: Legendary items with 5 affixes, increased range of positive effects
EXTREMELY RARE: Primal legendaries (legendaries with perfect stats)

Orbs:
RARE: Orb of expansion: Add affix
Orb of deletion: Remove suffix
Orb of void: Remove all affix
Orb of Discord: Chaos orb (randomize item and # of affix)
EXTREMELY RARE: Orb of strategy: remove one specific affix.
EXTREMELY RARE: Orb of Fables : Up all affixes on item by 1 tier, 25% chance to brick item (reduced by luck)

*/
