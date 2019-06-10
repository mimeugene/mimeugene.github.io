using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections.Generic;
using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System;
using System.Collections.Generic;


public class FoodListNew : MonoBehaviour {
	MathManager mathManager;
	Text Name;
	Text Price;
	Text Stock;
	Text Have;
	Text MoneySign;

	public static int changer = 0;
	public static int changerx = 0;
	public static int changerday = 0;
	public static int changerdayx = 0;
	public static int changestock = 0;
	public static int changestockx = 0;
	int[] randomized = new int[13];
	public static bool changePricebool = false;
	public static bool changeNetWorthbool = false;
	public static float lerpValue;
	public static bool changeColor;
	public bool changeCapacity = false;
	PlayerManager.Playerr player = new PlayerManager.Playerr();



//	void Awake (){
//		playermanager = GetComponent<PlayerManager>();
//	}

	void Start(){
		
		mathManager = GameObject.FindObjectOfType<MathManager> ();
		createFood ();
		populateBoard ();
		changeTextColor ();
	}

	void Update(){
//		if ((changer != changerx) || (changer != changerday)) {
//			Debug.Log ("this is changer: " + changer + "This is changerx" + changerx + "This is changerday" + changerday);
//			return;
//		}			

		if (changerdayx != changerday) {
			changeDay ();
		}

		if (changer != changerx) {
			buySellSomething ();
		}

		if (changestock != changestockx) {
			changeStock ();
		}

		if (changePricebool == true) {
			updatePrice ();
		}

		if (changeColor == true) {
			changeTextColor();
		}

		if ((changerdayx == changerday) && (changer == changerx) && (changestock == changestockx)){
			return;
		}

		if (changeNetWorthbool == true) {
			changeNetWorth ();
		}

//		if (changeCapacity == true) {
//			updateCapacity ();
//		}



//		int i = 0;


//		Debug.Log("it changed in FoodListNew");
//		foreach (Transform child in transform)
//		{
//			Name = child.Find("Name").GetComponent<Text>(); 
//			Price = child.Find("Price").GetComponent<Text>(); 
//			Stock = child.Find("Stock").GetComponent<Text>(); 
//			Have = child.Find("Have").GetComponent<Text>(); 
//		    Food food = new Food ();
//			food = FoodList[i];
//			Name.text  = food.Name;
//			food.Instance = MathManager.InstancePrice (food.Price, food.Percent);
//			Price.text = food.Instance.ToString();
//			food.Stock = MathManager.InStock ();
//			Stock.text = food.Stock.ToString();
//			Have.text = food.Owned.ToString();
//			i++;
//		}
//		changerx++;
	}

	public void buySellSomething(){
		int i = 0;
		foreach (Transform child in transform)
		{ 
			Stock = child.Find("Stock").GetComponent<Text>(); 
			Have = child.Find("Have").GetComponent<Text>(); 
			Food food = new Food ();
			food = FoodList[i];
			Name.text  = food.Name;
			food.Stock = MathManager.InStock ();
			Stock.text = food.Stock.ToString();
			Color blueColor = Color.blue;
			Color whiteColor = Color.white;
			Price.color = blueColor;
			if (food.Stock > 0) {
				Have.color = blueColor;
			} else {
				Have.color = whiteColor;
			}
			
			Have.text = food.Owned.ToString();
			i++;
		}
		changerx++;
	}

	public void updatePrice(){
		int z = 0;
		foreach (Transform child in transform)
		{ 
			Price = child.Find("Price").GetComponent<Text>(); 
			Food food = new Food ();
			food = FoodList[z];
			food.Instance = Convert.ToInt32(Price.text);
			z++;
		}
		changePricebool = false;
	}

	public void updateCapacity(){
		int z = 0;
		int totalCarrying = 0;
		foreach (Transform child in transform)
		{ 
			Have = child.Find("Have").GetComponent<Text>(); 
			int stocktemp = Convert.ToInt32 (Have.text);
			totalCarrying = totalCarrying + stocktemp;
			z++;
		}
		PlayerManager.playerr.CurrentCapacity = totalCarrying;
//		changeCapacity = false;
		InfoScript.changer++;
	}

	public void changeStock(){
		int i = 0;
		foreach (Transform child in transform)
		{ 
			Stock = child.Find("Stock").GetComponent<Text>(); 
			Have = child.Find("Have").GetComponent<Text>(); 
			Food food = new Food ();
			food = FoodList[i];
			Name.text  = food.Name;
			Stock.text = food.Stock.ToString();
			Have.text = food.Owned.ToString();
			i++;
		}
		updateCapacity ();

		changestockx++;
	}

	public void changeNetWorth(){
		int i = 0;
		int netSnapshot = 0;
		Debug.Log ("inside changeNetWorth");
		foreach (Transform child in transform)
		{ 
			Price = child.Find("Price").GetComponent<Text>(); 
			Have = child.Find("Have").GetComponent<Text>(); 
//			Food food = new Food ();
//			food = FoodList[i];
			int price = Convert.ToInt32 (Price.text);
			int have = Convert.ToInt32 (Have.text);
			int tempNetWorth = price * have;
			netSnapshot = netSnapshot + tempNetWorth;
			InfoScript.changer++;
			i++;
		}
		player = PlayerManager.playerr;
		player.NetWorth = player.TotalCash + netSnapshot;
		changeNetWorthbool = false;
		InfoScript.changer++;
	}


	public void changeDay(){
		int i = 0;
		foreach (Transform child in transform)
		{
			Name = child.Find("Name").GetComponent<Text>(); 
			Price = child.Find("Price").GetComponent<Text>(); 
			Stock = child.Find("Stock").GetComponent<Text>(); 
//			MoneySign = child.Find("Text (1)").GetComponent<Text>(); 
			Food food = new Food ();
			food = FoodList[i];
			Name.text  = food.Name;
			food.Instance = MathManager.InstancePrice (food.Price, food.Percent);
			Price.text = food.Instance.ToString();
			food.Stock = MathManager.InStock ();
			Stock.text = food.Stock.ToString();
			i++;
		}
		changeNetWorth ();
		changerdayx++;
	}

	public void changeTextColor(){
		int checkeasy = PlayerPrefs.GetInt ("easyMode", 0);
		if (checkeasy == 1) {
			int i = 0;
			foreach (Transform child in transform) {
				Name = child.Find ("Name").GetComponent<Text> (); 
				Price = child.Find ("Price").GetComponent<Text> (); 
				Stock = child.Find ("Stock").GetComponent<Text> (); 
				Have = child.Find ("Have").GetComponent<Text> (); 

				Food food = new Food ();
				food = FoodList [i];
				int priceint = Int32.Parse (Price.text);
//				Debug.Log ("price, percent, instance is : " + food.Price + food.Percent + priceint);
				calculateLerp (food.Price, food.Percent, priceint);
				Color yellow = Color.yellow;
				Color white = Color.white;
				if (Int32.Parse(Have.text) > 0) {
					Have.color = yellow;
				}
				Color lerpedColor = Color.white;
				lerpedColor = Color.Lerp (Color.green, Color.red, lerpValue);
				Price.color = lerpedColor;
				if (Int32.Parse(Have.text) == 0) {
					Have.color = white;
				}
				Debug.Log ("have.text is :  " + Have.text);
				i++;
			}
		}
		if (checkeasy == 0) {
			int i = 0;
			foreach (Transform child in transform) {
				Price = child.Find ("Price").GetComponent<Text> (); 
				Color lerpedColor = Color.white;
				lerpedColor = Color.white;
				Price.color = lerpedColor;
				i++;
			}
		}
		changeColor = false;

	}

	public void calculateLerp(double price, double percent, double instance){
		double maxPrice = 1 + (percent/100);
		double minPrice = 1 - (percent/100);
		double maxPossiblePrice = price * maxPrice;
		double minPossiblePrice = price * minPrice;
		double maxPriceMinus = maxPossiblePrice - minPossiblePrice;
		double instanceMinus = instance - minPossiblePrice;
		lerpValue = Convert.ToSingle(instanceMinus / maxPriceMinus);
	}

	public void populateBoard(){
		int i = 0;
				foreach (Transform child in transform)
				{
                    Debug.Log("i is: " + i);
					Name = child.Find("Name").GetComponent<Text>(); 
					Price = child.Find("Price").GetComponent<Text>(); 
					Stock = child.Find("Stock").GetComponent<Text>(); 
					Have = child.Find("Have").GetComponent<Text>(); 
				    Food food = new Food ();
						//add these lines:
					MathManager.RandomizeFood();
//					food = FoodList[MathManager.random13[i]];
					food = FoodList[i];
					Name.text  = food.Name;
					food.Instance = MathManager.InstancePrice (food.Price, food.Percent);
					Price.text = food.Instance.ToString();
					food.Stock = MathManager.InStock ();
					Stock.text = food.Stock.ToString();
					Have.text = food.Owned.ToString();
                    Debug.Log(i);
					i++;
				}
	}
	public void createFood(){
		CreateFood (200, 70, "Salt", 0, 0, 0);
		CreateFood (350, 40, "Potato", 0, 0, 0);
		CreateFood (750, 35, "Apple", 0, 0, 0);
		CreateFood (1350, 60, "Beer", 0, 0, 0);
		CreateFood (2000, 45, "Onion", 0, 0, 0);
		CreateFood (3500, 25, "Pepper", 0, 0, 0);
		CreateFood (4150, 70, "Charcoal", 0, 0, 0);
		CreateFood (5000, 40, "Pork", 0, 0, 0);
		CreateFood (6500, 40, "Goat", 0, 0, 0);
		CreateFood (7900, 30, "Grapes", 0, 0, 0);
		CreateFood (9500, 40, "Sugar", 0, 0, 0);
		CreateFood (11000, 30, "Beef", 0, 0, 0);
        CreateFood (13500, 25, "Wheat", 0, 0, 0);
		CreateFood (14500, 30, "Cheese", 0, 0, 0);
		CreateFood (16500, 20, "Butter", 0, 0, 0);
        CreateFood(19500, 40, "Olive", 0, 0, 0);
        CreateFood(17500, 40, "SlowCooker", 0, 0, 0);
        //RandomizeIt();
	}

    //public void RandomizeIt()
    //{
    //    int instance = UnityEngine.Random.Range(1, 17);
    //}

    public class Food{
		public int Price;
		public int Percent;
		public string Name;
		public int Instance;
		public int Stock;
		public int Owned;
	}

	public static List<Food> FoodList = new List<Food> ();

	public void CreateFood (int price, int percent, string name, int instance, int stock, int owned){
		Food food = new Food();

		food.Price = price;
		food.Percent = percent;
		food.Name = name;
		food.Instance = instance;
		food.Stock = stock;
		food.Owned = owned;

		FoodList.Add (food);
	}
}