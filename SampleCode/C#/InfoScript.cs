using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;

//const player = using(PlayerManager);

public class InfoScript : MonoBehaviour
{

	DataManager dataManager;
	PlayerManager playerManager;
	Text[] newText;
	public static int changer = 0;
	public static int changerx = 0;
	public static int changer2 = 0;
	public GameObject cashPanel;
	PopUpText popUpText;
	PlayerPrefs playerPrefs;
	public static bool cashPanelSwitch = true;
	public static bool capacityPanelSwitch = true;


	void Start ()
	{
		playerManager = GetComponent<PlayerManager> ();			
		newText = GetComponentsInChildren<Text> ();
		newText [0].text = "Capacity: " + PlayerManager.playerr.CurrentCapacity + "/" + PlayerManager.playerr.MaxCapacity;

	}

	void Update ()
	{		
		if (changer != changerx) {
			playerManager = GetComponent<PlayerManager> ();			
			dataManager = GameObject.FindObjectOfType<DataManager> ();
			newText = GetComponentsInChildren<Text> ();
			Debug.Log ("attempting to change infopanel here");
			if (DataManager.days == 1) {
				newText [1].text = "Last Day!";
			} else if (DataManager.days == 0) {
				newText [1].text = "Game Over!";
				checkHighScore ();
				updateTotalScore ();
			} else if (DataManager.days != 0) {
				newText [1].text = DataManager.days + " Days left";
			}
			updateInfoPanel ();
			changer = 0;
		}			




	}

	public void updateInfoPanel ()
	{
		Debug.Log ("updateinfompanel");
		newText [0].text = "High Score: " + (PlayerPrefs.GetInt ("highscore", 0));
		if (cashPanelSwitch == true) {
			newText [2].text = "Cash: " + PlayerManager.playerr.TotalCash;
		} 
		else if (cashPanelSwitch == false) {
			newText [2].text = "Net: " + PlayerManager.playerr.NetWorth;
		}
		if (capacityPanelSwitch == true) {
			newText [0].text = "Capacity: " + PlayerManager.playerr.CurrentCapacity + "/" + PlayerManager.playerr.MaxCapacity;
		} 
		else if (capacityPanelSwitch == false) {
			newText [0].text = "High Score: " + (PlayerPrefs.GetInt ("highscore", 0));
		}
	}

	public void checkHighScore ()
	{
		int oldScore = PlayerPrefs.GetInt ("highscore", 0);
		int currentScore = PlayerManager.playerr.NetWorth;
		if (currentScore > oldScore) {
			PopUpText.newString = ("New high score! : " + currentScore);
			PopUpText.changerPopUp++;
			PlayerPrefs.SetInt ("highscore", currentScore);
		}
	}
	public void updateTotalScore()
	{
		int oldOverallGameScore = PlayerPrefs.GetInt ("OverallGameScore", 0);
		int	newOverallGameScore = oldOverallGameScore + PlayerManager.playerr.NetWorth;
		PlayerPrefs.SetInt("OverallGameScore", newOverallGameScore);
	}
}