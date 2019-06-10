using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;

public class BuySellPanelScript : MonoBehaviour {

	Text [] sliderText;
	public static Slider [] slider;

//	FoodListNew foodlistnew;
//	ButtonFunctions buttonfunctions;

	public static int changer = 0;
	public static int changerx = 0;
	public static int insta;
	public static string buyorsell;

	FoodListNew.Food food = new FoodListNew.Food ();


	void Start()	{			
		slider = GetComponentsInChildren<Slider> ();
	    sliderText = GetComponentsInChildren<Text> ();
//		foodlistnew = GameObject.FindObjectOfType<FoodListNew> ();
//		buttonfunctions = GameObject.FindObjectOfType<ButtonFunctions> ();

	}
		// Invoked when the value of the slider changes.

	void Update(){
		if (changer != changerx) {
			updateBuySellPanel ();
		} else if (changer == changerx) {
			return;
		}
	}

	public void updateBuySellPanel(){
		insta = ButtonFunctions.foodInstance;
		food = FoodListNew.FoodList [insta];
		slider [0].value = 0;

		//this is the buy/sell info panel
		if ((PlayerManager.playerr.TotalCash / food.Instance) <= food.Stock) {
			slider [0].maxValue = (PlayerManager.playerr.TotalCash / food.Instance);
		} else if ((PlayerManager.playerr.TotalCash / food.Instance) > food.Stock) {
			slider [0].maxValue = food.Stock;
		}
		if (food.Owned == 0) {
			slider [0].minValue = 0;
		} else if (food.Owned > 0) {
			slider [0].minValue = -(food.Owned);
		}
		slider [0].onValueChanged.AddListener (delegate {
			ValueChangeCheck ();
		});

		//		slider[0].OnDrag;
		if (FoodListNew.FoodList [BuySellPanelScript.insta].Owned == 0) {
			buyorsell = "buy";
		}
		else if (FoodListNew.FoodList [BuySellPanelScript.insta].Owned > 0) {
			buyorsell = "sell";
		}
		sliderText [2].text = "Click $ sign again to " + buyorsell + " all " + food.Name + " or use slider";
		changerx++;
	}

	public void ValueChangeCheck()
	{	
		if (slider [0].value == 0) {
			sliderText [2].text = "Click $ sign again to " + buyorsell + " all " + food.Name + " or use slider";
		} else if (slider [0].value < 0) {
			sliderText [2].text = ("Selling " + (Math.Abs(slider[0].value)).ToString() + " units of " + food.Name) +  " for " + (food.Instance * (Math.Abs(slider[0].value))).ToString();
		} else if (slider [0].value > 0) {
			sliderText [2].text = ("Buying " + slider[0].value.ToString() + " units of " + food.Name+ " for " + (food.Instance * (Math.Abs(slider[0].value))).ToString());
		}
	}

	}

	