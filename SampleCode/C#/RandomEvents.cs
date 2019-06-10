using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System;
using System.Collections.Generic;

public class RandomEvents: MonoBehaviour {

	public static int eventChanger = 0;
	public static int tempPrice;
	public static int particularItem;
	public AudioClip Chime;
	Text Named;
	Text Priced;
	Text Stock;
	Text Have;
	AudioSource audioSource;

	FoodListNew.Food food = new FoodListNew.Food ();


	void Start () {
	}

	void Update () {
		if (eventChanger != 0) {
			randomEvent ();
			eventChanger = 0;
		}
	}
		

	public void randomEvent(){
		Debug.Log ("made it into the random event");

		if (ButtonFunctions.rollDiceTravel > 10 && ButtonFunctions.rollDiceTravel < 36) {
			playSound ();
			Debug.Log ("made it into the random event");
			particularItem = UnityEngine.Random.Range (0, 14);

			int i = 0;
			foreach (Transform child in transform) { 
				if (particularItem == i) {
					Named = child.Find ("Name").GetComponent<Text> (); 
					Priced = child.Find ("Price").GetComponent<Text> (); 
					tempPrice = Convert.ToInt32 (Priced.text);
					int triplePrice = tempPrice * 3;
					PopUpText.newString = (Named.text + " global shortage, prices tripled!");
					Priced.text = triplePrice.ToString ();
					Priced.color = new Color32(0x3C, 0x3C, 0xFF, 0xFF);
//					Priced.color = new Color(232.0f/255.0f, 187.0f/255.0f, 255.0f/255.0f);
					FoodListNew.FoodList [i].Price = triplePrice;
					FoodListNew.changePricebool = true;
//					Price.text = triplePrice.ToString ();
					PopUpText.changerPopUp++;
				}
				i++;
			}
		}


		else if (ButtonFunctions.rollDiceTravel > 35 && ButtonFunctions.rollDiceTravel < 60) {
				playSound ();
				particularItem = UnityEngine.Random.Range (0, 14);
				int z = 0;
				foreach (Transform child in transform)
				{ 
					if (particularItem == z) {
						Named = child.Find("Name").GetComponent<Text>(); 
						Priced = child.Find("Price").GetComponent<Text>(); 
						Stock = child.Find("Stock").GetComponent<Text>(); 
						tempPrice = Convert.ToInt32(Priced.text);
						int halfPrice = Convert.ToInt32(tempPrice/3);
						PopUpText.newString = (Named.text + " surplus, very cheap!");
						Priced.text = halfPrice.ToString();
						Stock.text = (Convert.ToInt32(Stock.text) * 3).ToString();
						FoodListNew.FoodList [z].Stock = Convert.ToInt32(Stock.text);
						FoodListNew.FoodList [z].Price = halfPrice;
						Priced.color = new Color32(0x3C, 0x3C, 0xFF, 0xFF);
//						Priced.color = new Color(232.0f/255.0f, 187.0f/255.0f, 255.0f/255.0f);
						FoodListNew.changePricebool = true;
						PopUpText.changerPopUp++;
					}
					z++;
				}	
	}
}
		
	void playSound(){
		audioSource = GetComponent<AudioSource>();
		audioSource.PlayOneShot(Chime, 0.7F);
	}
}