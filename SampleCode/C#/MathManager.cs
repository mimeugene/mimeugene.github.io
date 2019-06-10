using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System;

public class MathManager : MonoBehaviour {


	// Use this for initialization
	void Start () {
	}
		

	public static int InstancePrice(int price, int percent){
		double prices = Convert.ToDouble (price);
		double percents = Convert.ToDouble (percent);
		double minPrice = prices * (-(percents / 100) + 1);
		int minPriced = Convert.ToInt32 (minPrice);
		double maxPrice = prices * ((percents / 100) + 1);
		int maxPriced = Convert.ToInt32 (maxPrice);
		int instance = UnityEngine.Random.Range (minPriced, maxPriced);
//		Debug.Log ("test");
		return instance;
	}

	public static int InStock(){
		int stock = UnityEngine.Random.Range (10, 30);
		return stock;
	}


	public static int QuantityMethod(){
		int quant = UnityEngine.Random.Range (5, 15);
		return quant;
	}
		
	public static int [] random13 = new int[13];
	public static int rph = 0;
	public static bool push = true;

	public static void RandomizeFood(){
		for (int i = 0; i < 13; i++) {
			rph = UnityEngine.Random.Range(0, 17);
			for (int y = 0; y < 13; y++){
				if (rph == random13 [y]) {
					push = false;
				}
			}
			if (push == true) {
				random13[i] = rph;
			}
			push = true;
		}
//			array = array.OrderByDescending(c => c).ToArray();
//		Array.Sort(random13);
	}

	// Update is called once per frame
	void Update () {
	
	}
}
