using UnityEngine;
using System.Collections.Generic;
using System.Linq;
using System;


public class DataManager : MonoBehaviour {

	// We need a map that goes from a username to score

	//The map we are building is going to look like a list of users 
	//
	//    LIST OF USERS -> A user -> List of scores for that user
	//

	public Dictionary<string, Dictionary<string, int> > foodData;

	public static string[] foood = new string[] {"Salt", "Potato", "Apple", "Beer", "Onion", "Pepper", "Coal", "Pork", "Goat", "Grape", "Sugar", "Beef", "Wheat", "Cheese", "Butter", "Olive", "SlowCooker"};
	int changeCounter = 0;
	public static float assets = 1000;
	public static float cash = 1000;
	public static int days = 15;

	void Start () {
//		DontDestroyOnLoad (gameObject);
//		SetName ("Salt", "name", "Salt");
		SetData ("Salt", "price", 200);
		SetData ("Salt", "change", 85);
		SetData ("Salt", "index", 1);
		SetData ("Salt", "stock", 15);
		SetData ("Salt", "have", 0);

//		SetName ("Potato", "name", "Potato");
		SetData ("Potato", "price", 350);
		SetData ("Potato", "change", 35);
		SetData ("Potato", "index", 2);
		SetData ("Potato", "stock", 15);
		SetData ("Potato", "have", 0);

//		SetName ("Apple", "name", "Apple");
		SetData ("Apple", "price", 750);
		SetData ("Apple", "change", 35);
		SetData ("Apple", "index", 3);
		SetData ("Apple", "stock", 15);
		SetData ("Apple", "have", 0);

//		SetName ("Beer", "name", "Beer");
		SetData ("Beer", "price", 1350);
		SetData ("Beer", "change", 75);
		SetData ("Beer", "index", 4);
		SetData ("Beer", "stock", 15);
		SetData ("Beer", "have", 0);

//		SetName ("Onion", "name", "Onion");
		SetData ("Onion", "price", 2000);
		SetData ("Onion", "change", 45);
		SetData ("Onion", "index", 5);
		SetData ("Onion", "stock", 15);
		SetData ("Onion", "have", 0);

//		SetName ("Pepper", "name", "Pepper");
		SetData ("Pepper", "price", 3500);
		SetData ("Pepper", "change", 25);
		SetData ("Pepper", "index", 6);
		SetData ("Pepper", "stock", 15);
		SetData ("Pepper", "have", 0);

//		SetName ("Coal", "name", "Coal");
		SetData ("Coal", "price", 4150);
		SetData ("Coal", "change", 85);
		SetData ("Coal", "index", 7);
		SetData ("Coal", "stock", 15);
		SetData ("Coal", "have", 0);

//		SetName ("Pork", "name", "pork");
		SetData ("Pork", "price", 5000);
		SetData ("Pork", "change", 45);
		SetData ("Pork", "index", 8);
		SetData ("Pork", "stock", 15);
		SetData ("Pork", "have", 0);

//		SetName ("Goat", "name", "Goat");
		SetData ("Goat", "price", 5000);
		SetData ("Goat", "change", 45);
		SetData ("Goat", "index", 9);
		SetData ("Goat", "stock", 15);
		SetData ("Goat", "have", 0);

//		SetName ("Grape", "name", "Grape");
		SetData ("Grape", "price", 7900);
		SetData ("Grape", "change", 30);
		SetData ("Grape", "index", 10);
		SetData ("Grape", "stock", 15);
		SetData ("Grape", "have", 0);

//		SetName ("Sugar", "name", "Sugar");
		SetData ("Sugar", "price", 9500);
		SetData ("Sugar", "change", 45);
		SetData ("Sugar", "index", 11);
		SetData ("Sugar", "stock", 15);
		SetData ("Sugar", "have", 0);

//		SetName ("Beef", "name", "Beef");
		SetData ("Beef", "price", 11000);
		SetData ("Beef", "change", 30);
		SetData ("Beef", "index", 12);
		SetData ("Beef", "stock", 15);
		SetData ("Beef", "have", 0);

//		SetName ("Wheat", "name", "Wheat");
		SetData ("Wheat", "price", 13500);
		SetData ("Wheat", "change", 20);
		SetData ("Wheat", "index", 13);
		SetData ("Wheat", "stock", 15);
		SetData ("Wheat", "have", 0);

//		SetName ("Cheese", "name", "Cheese");
		SetData ("Cheese", "price", 14500);
		SetData ("Cheese", "change", 30);
		SetData ("Cheese", "index", 14);
		SetData ("Cheese", "stock", 15);
		SetData ("Cheese", "have", 0);

//		SetName ("Butter", "name", "Butter");
		SetData ("Butter", "price", 16500);
		SetData ("Butter", "change", 20);
		SetData ("Butter", "index", 15);
		SetData ("Butter", "stock", 15);
		SetData ("Butter", "have", 0);

//		SetName ("Olive", "name", "Olive");
		SetData ("Olive", "price", 17500);
		SetData ("Olive", "change", 85);
		SetData ("Olive", "index", 16);
		SetData ("Olive", "stock", 15);
		SetData ("Olive", "have", 0);

//		SetName ("SlowCooker", "name", "SlowCooker");
		SetData ("SlowCooker", "price", 20000);
		SetData ("SlowCooker", "change", 20);
		SetData ("SlowCooker", "index", 0);
		SetData ("SlowCooker", "stock", 15);
		SetData ("SlowCooker", "have", 0);

		}

	void Init (){
		if (foodData != null)
			return;
		foodData = new Dictionary<string, Dictionary<string, int> > ();
	}

	public int GetData(string foodname, string dataUnit){
		Init ();

		if (foodData.ContainsKey(foodname) == false){
			return 0;
		}

		if (foodData [foodname].ContainsKey (dataUnit) == false) {
			return 0;
		}

		return foodData [foodname] [dataUnit];
	}

//	public void SetName(string foodname, string dataType, string value) {
//		Init ();
//		changeCounter++;
//		if (foodData.ContainsKey (foodname) == false) {
//			foodData [foodname] = new Dictionary<string, int> ();
//		}
//		foodData [foodname] [dataType] = value;
//	}

	public void SetData(string foodname, string dataType, int value) {
		Init ();
		changeCounter++;
		if (foodData.ContainsKey (foodname) == false) {
			foodData [foodname] = new Dictionary<string, int> ();
		}
		foodData [foodname] [dataType] = value;
	}


//	public void ChangeScore (string username, string dataType, int amount) {
//		Init ();
//		int currScore = GetData (username, dataType);
//		SetData(username, dataType, currScore + amount);
//	}

	public void NetWorthCalculator(){
	
	}

	public string[] GetFoodNames() {
		Init ();
		return foodData.Keys.ToArray();
	}

	public string[] GetFoodNames(string sortingScoreType) {
		Init ();
		return foodData.Keys.OrderByDescending( n => GetData(n, sortingScoreType) ).ToArray();
	}

	public void setPrice(string foodname) {
		int change = (foodData [foodname] ["change"]);
		double price = (foodData [foodname] ["price"]);
		int changeNeg = change - (change * 2); 
		double randomNumber = UnityEngine.Random.Range(changeNeg, change);
		int finalprice = Convert.ToInt32(price * ((randomNumber / 100) + 1));
		SetData (foodname, "finalprice", finalprice);
	}

	public void setStock(string foodname) {
		int change = (foodData [foodname] ["change"]);
		double price = (foodData [foodname] ["stock"]);
		int changeNeg = change - (change * 2); 
		double randomNumber = UnityEngine.Random.Range(changeNeg, change);
		int stock = Convert.ToInt32(price * ((randomNumber / 100) + 1));
		SetData (foodname, "stock", stock);
	}
		

	public int GetChangeCounter(){
		return changeCounter;
	}
}
