using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System;
using System.Collections.Generic;
using System.Collections;

public class Mugging : MonoBehaviour {


	public GameObject muggingPanel;
	PopUpText popUpText;
	public static int rollclicker = 0;
	public static int rollclickerx = 0;
	// Use this for initialization
	public static int mugged = 0;
	void Start () {
	}
	
	void Update () {
		if (rollclicker != rollclickerx) {
			mugger ();
			rollclicker = 0;
		}
	}

	public void mugger(){
		muggingPanel.SetActive (true);
		mugged = 1;
		//enter mugging code here
		}
	}
	
