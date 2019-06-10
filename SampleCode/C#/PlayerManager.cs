using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections.Generic;


public class PlayerManager : MonoBehaviour {
	MathManager mathManager;

	public static int changer = 0;
	public static int changerx = 0;
	public static Playerr playerr = new Playerr ();

	void Start(){
//		CreatePlayer (1000, 0, false, 100);
		playerr.TotalCash = 1000; 
		playerr.Assets = 0;
		playerr.NetWorth = playerr.TotalCash + playerr.Assets;
		playerr.HaveBodyGuard = false;
		playerr.Health = 100;
		playerr.Debt = 0;
		playerr.MaxCapacity = 100;
		playerr.CurrentCapacity = 0;
	}

	void Update(){
		if (changer != changerx) {
			//			Debug.Log ("this is: " + changer + changerx);
			return;
		}			
		changerx++;

	}

	public class Playerr{
		public int TotalCash;
		public int NetWorth;
		public int Assets;
		public int Debt;
		public bool HaveBodyGuard;
		public int Health;
		public int MaxCapacity;
		public int CurrentCapacity;

	}
		

	public List<Playerr> playerone = new List<Playerr> ();

	public void CreatePlayer (int cash, int assets, bool havebodyguard, int health){
		Playerr playerz = new Playerr();

		playerz.TotalCash = cash;
		playerz.NetWorth = cash + assets;
		playerz.Assets = assets;
		playerz.HaveBodyGuard = havebodyguard;
		playerz.Health = health;

		playerone.Add (playerz);
	}

}