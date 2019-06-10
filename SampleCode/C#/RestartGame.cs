using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections.Generic;

public class RestartGame : MonoBehaviour {

	public GameObject foodList;

	DataManager dataManager;
	PlayerManager playerManager;
	FoodListNew foodListNew;
	Text Have;
	PopUpText popUpText;

	public GameObject menuPanel;

	void Start(){
		foodListNew = GameObject.FindObjectOfType<FoodListNew> ();
	}

	void Update(){
		if (Input.GetKeyDown("r"))
		{
			RestartScene ();
		}
	}

	public void RestartScene() {
		PlayerManager.playerr.TotalCash = 1000; 
		PlayerManager.playerr.Assets = 0;
		PlayerManager.playerr.HaveBodyGuard = false;
		PlayerManager.playerr.Health = 100;
		PlayerManager.playerr.Debt = 0;		
		PlayerManager.playerr.TotalCash = 1000;
		DataManager.days = 15;
		InfoScript.changer++;
		FoodListNew.changestock++;
		PopUpText.newString = "";
		Mugging.mugged = 0;
		for (int i = 0; i < 13; i++) {
			FoodListNew.FoodList [i].Owned = 0;
		}
		menuPanel.SetActive (false);
		StopAllCoroutines();
        SceneManager.LoadSceneAsync(SceneManager.GetActiveScene().name); // loads current scene
        //ButtonFunctions.Travel();
		}

}