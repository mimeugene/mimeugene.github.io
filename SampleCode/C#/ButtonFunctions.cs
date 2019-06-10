using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
[RequireComponent(typeof(AudioSource))]


public class ButtonFunctions : MonoBehaviour {

	public GameObject buySellPanel;
	public GameObject DataPanel;
	public GameObject muggingPanel;
	public GameObject cashPanel;
	public GameObject netPanel;
	public static int foodInstance;
	public GameObject menuPanel;
	public AudioClip coin;


	DataManager dataManager;
	FoodListNew foodListNew;
	InfoScript infoScript;
	PopUpText popUpText;
	RandomEvents randomEvents;
	Slider sliderr;
	Mugging mugging;
	int maxValue;
	int minValue;
	float cost;
	int rolldice;
	public static int rollDiceTravel = 0;
	Button [] button;
	PlayerManager.Playerr player = new PlayerManager.Playerr();

	void Start(){
		PlayerPrefs.SetInt ("easyMode", 1);
		foodListNew = GameObject.FindObjectOfType<FoodListNew> ();
	}

	public void Travel(){
		if (DataManager.days > 0) {
			if (PopUpText.textActive == true){
				PopUpText.removePopUp = true;	
			}
			InfoScript.changer++;
			FoodListNew.changerday++;
			clearRandomChanges ();
			randomEventChecker ();
			foodListNew.changeCapacity = true;
			FoodListNew.changeColor=true;
		} else if (DataManager.days < 1) {
			Debug.Log ("Game over!");
		}
	}

	public void randomEventChecker(){
		rollDiceTravel = UnityEngine.Random.Range (1, 100);
		DataManager.days--;
		if (rollDiceTravel < 11 && DataManager.days > 2 && Mugging.mugged == 0) { 
			Mugging.rollclicker++;
			mugText();
		}

		if (rollDiceTravel > 10 && rollDiceTravel < 60){
			RandomEvents.eventChanger = 1;
		}
	}


	public void clearRandomChanges(){
		if (RandomEvents.tempPrice != 0) {
			FoodListNew.FoodList [RandomEvents.particularItem].Price = RandomEvents.tempPrice;
		}
	}

	public void Store(){
			}
	public void mugText(){
		PopUpText.newString = ("A dirty thief appeared!");
		PopUpText.changerPopUp++;
	}

	public void BuySell(){
		if (buySellPanel.active == true) {
			buySellPanel.SetActive (false);
			foodInstance = transform.GetSiblingIndex();
//			Debug.Log ("owned is : " + FoodListNew.FoodList [BuySellPanelScript.insta].Owned);
			if (FoodListNew.FoodList [BuySellPanelScript.insta].Owned == 0) {
				BuyAll ();
			}
			else if (FoodListNew.FoodList [BuySellPanelScript.insta].Owned > 0) {
				SellAll ();
			}
		} else if (buySellPanel.active == false) {
//			Debug.Log ("You have entered the store! Kind of.. ");
			buySellPanel.SetActive (true);
			BuySellPanelScript.changer++;
			foodInstance = gameObject.transform.GetSiblingIndex();
			//testing = gameObject.transform.IsChildOf(0);
			//transform.IsChildOf();
//			Debug.Log ("food instance is " + foodInstance);
			foodListNew.changeTextColor();
		}
	}	

	public void Confirm(){
		player = PlayerManager.playerr;
		cost = (BuySellPanelScript.slider [0].value * FoodListNew.FoodList [BuySellPanelScript.insta].Instance);
		FoodListNew.FoodList [BuySellPanelScript.insta].Stock = FoodListNew.FoodList [BuySellPanelScript.insta].Stock - Convert.ToInt32(BuySellPanelScript.slider [0].value);
		player.TotalCash = player.TotalCash - Convert.ToInt32(cost);
		FoodListNew.FoodList [BuySellPanelScript.insta].Owned = Convert.ToInt32(BuySellPanelScript.slider [0].value + FoodListNew.FoodList [BuySellPanelScript.insta].Owned);	
//		FoodListNew.changer++;
		player.NetWorth = player.TotalCash + (FoodListNew.FoodList [BuySellPanelScript.insta].Instance * FoodListNew.FoodList [BuySellPanelScript.insta].Owned);
		InfoScript.changer++;
		FoodListNew.changestock++;
		buySellPanel.SetActive(false);		
		FoodListNew.changeColor = true;

	}

	public void SellAll(){
		Debug.Log ("ENTERED SELL ALL!");
		player = PlayerManager.playerr;
		minValue = FoodListNew.FoodList [BuySellPanelScript.insta].Owned;
		//		BuySellPanelScript.updateBuySellPanel();
		cost = (minValue * FoodListNew.FoodList [BuySellPanelScript.insta].Instance);
		FoodListNew.FoodList [BuySellPanelScript.insta].Stock = FoodListNew.FoodList [BuySellPanelScript.insta].Stock + minValue;
		player.TotalCash = player.TotalCash + Convert.ToInt32(cost);
		FoodListNew.FoodList [BuySellPanelScript.insta].Owned = minValue - FoodListNew.FoodList [BuySellPanelScript.insta].Owned;	
		player.NetWorth = player.TotalCash + (FoodListNew.FoodList [BuySellPanelScript.insta].Instance * FoodListNew.FoodList [BuySellPanelScript.insta].Owned);
		InfoScript.changer++;
		FoodListNew.changestock++;
		gameObject.GetComponent<AudioSource> ().Play ();
//		AudioSource.PlayClipAtPoint(coin, transform.position);
		FoodListNew.changeColor = true;
	}

	public void BuyAll(){
		player = PlayerManager.playerr;
		int optioncash = 0;
		int optioncapacity = 0;
		int optionstock = 0;

		optioncash = Math.Abs ((player.TotalCash / FoodListNew.FoodList [BuySellPanelScript.insta].Instance));
		Debug.Log("optioncash is : " + optioncash);
		optionstock = FoodListNew.FoodList [BuySellPanelScript.insta].Stock;
		Debug.Log("optionstock is : " + optionstock);
		optioncapacity = PlayerManager.playerr.MaxCapacity - PlayerManager.playerr.CurrentCapacity;
		Debug.Log ("optioncapactiy is : " + optioncapacity);

		maxValue = Math.Min(optioncash, Math.Min(optionstock, optioncapacity));

		cost = (maxValue * FoodListNew.FoodList [BuySellPanelScript.insta].Instance);
		FoodListNew.FoodList [BuySellPanelScript.insta].Stock = FoodListNew.FoodList [BuySellPanelScript.insta].Stock - maxValue;
		player.TotalCash = player.TotalCash - Convert.ToInt32(cost);
		FoodListNew.FoodList [BuySellPanelScript.insta].Owned = Convert.ToInt32(maxValue + FoodListNew.FoodList [BuySellPanelScript.insta].Owned);	
		//		FoodListNew.changer++;
		player.NetWorth = player.TotalCash + (FoodListNew.FoodList [BuySellPanelScript.insta].Instance * FoodListNew.FoodList [BuySellPanelScript.insta].Owned);
		InfoScript.changer++;
		FoodListNew.changestock++;
		FoodListNew.changeColor = true;

	}

	public void Cancel(){
		BuySellPanelScript.changer++;
		buySellPanel.SetActive(false);
	}

	public void Surrender(){
		muggingPanel.SetActive (false);
		player = PlayerManager.playerr;
		int twentyPercent = Convert.ToInt32(player.TotalCash * .20);
		PopUpText.newString = ("You surrender all your cash and the thief let you go. - $" + player.TotalCash);
		player.TotalCash = 0;
		PopUpText.changerPopUp++;
		InfoScript.changer++;
		Mugging.mugged = 1;
	}

	public void Fight(){
		muggingPanel.SetActive (false);
		player = PlayerManager.playerr;

		rolldice = UnityEngine.Random.Range (1, 100);
		Debug.Log ("Looks like you didnt have a weapon");

		if (rolldice < 10) {
			int thirtyPercentNet = Convert.ToInt32(player.NetWorth * .20);
			PopUpText.newString = ("You beat up the thief + $"+ thirtyPercentNet);
			player.TotalCash = player.TotalCash + thirtyPercentNet;
		}
		if (rolldice >= 10 && rolldice < 50) {
//			PopUpText.newString = ("The mugger beat you up - $1000");
//			player.TotalCash = player.TotalCash - 1000;
			int twentyPercent = Convert.ToInt32(player.TotalCash * .20);
			PopUpText.newString = ("The thief stabs you - $" + twentyPercent);
			player.TotalCash = player.TotalCash - twentyPercent;

		}
		if (rolldice >=50 && rolldice < 99) {
			PopUpText.newString = ("You got knocked out, lose 2 days");
			DataManager.days--;
			DataManager.days--;
		}
		if (rolldice > 98) {
			PopUpText.newString = ("You stole his gold tooth! + $15,000");
			player.TotalCash = player.TotalCash + 15000;
		}
		PopUpText.changerPopUp++;
		InfoScript.changer++;
		Mugging.mugged = 1;
	}

	public void Run(){
		muggingPanel.SetActive (false);
		player = PlayerManager.playerr;
		rolldice = UnityEngine.Random.Range (1, 100);
		if (rolldice < 41) {
			int fiftyPercent = Convert.ToInt32(player.TotalCash * .50);
			PopUpText.newString = ("You got away, but dropped $" + fiftyPercent);
			player.TotalCash = player.TotalCash - fiftyPercent;
		}

		if (rolldice > 40) {
			PopUpText.newString = ("You got away!");
		}
		PopUpText.changerPopUp++;
		InfoScript.changer++;
		Mugging.mugged = 1;
	}

	public void settingsButton(){
		menuPanel.SetActive (true);
	}
		
	public void switchCashView(){
		Debug.Log ("clicked tha shiz");
		if (InfoScript.cashPanelSwitch == true) {
			Debug.Log ("switched to false");
			InfoScript.cashPanelSwitch = false;
		}

		else if (InfoScript.cashPanelSwitch == false) {
			Debug.Log ("switched to true");
			InfoScript.cashPanelSwitch = true;
		}
		InfoScript.changer++;
	}

	public void switchCapacityView(){
		if (InfoScript.capacityPanelSwitch == true) {
			InfoScript.capacityPanelSwitch = false;
		}

		else if (InfoScript.capacityPanelSwitch == false) {
			InfoScript.capacityPanelSwitch = true;
		}
		InfoScript.changer++;
	}

	public void ResetHighScore(){
		PlayerPrefs.SetInt ("highscore", 0);
		PlayerPrefs.SetInt ("OverallGameScore", 0);

	}

	public void CancelMenu(){
		menuPanel.SetActive (false);
	}

	public void EasyMode(){
		int yes = PlayerPrefs.GetInt ("easyMode", 0);
		if (yes == 0){
			PlayerPrefs.SetInt ("easyMode", 1);
			}
		if (yes == 1){
			PlayerPrefs.SetInt ("easyMode", 0);
		}
	}

	public void Log(){
		int overallGameScore = PlayerPrefs.GetInt ("OverallGameScore", 0);
		PopUpText.newString = ("total score is : " + overallGameScore);
		PopUpText.changerPopUp++;
	}

	IEnumerator ExecuteAfterTime(float time)
	{
		yield return new WaitForSeconds(time);
		FoodListNew.changeColor = true;
	}
		
}
