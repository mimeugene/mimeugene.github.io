using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class FoodDataList : MonoBehaviour {
	
	public GameObject DataList;
	public GameObject buySellPanel;
	DataManager dataManager;

	int lastChangeCounter;

	// Use this for initialization
	void Start () {
		dataManager = GameObject.FindObjectOfType<DataManager> ();
		lastChangeCounter = dataManager.GetChangeCounter ();
	}
	
	// Update is called once per frame
	void Update () {
		if (dataManager == null) {
			Debug.Log ("You forgot to add the data manager component to a game object!");
			return;
		}

		if (dataManager.GetChangeCounter () == lastChangeCounter) {
			//no change since last update!
			//Debug.Log ("No change since last update!");
			return;
		}

		lastChangeCounter = dataManager.GetChangeCounter ();

		while (this.transform.childCount > 0) {
			Transform c = this.transform.GetChild (0);
			c.SetParent (null);
			Destroy (c.gameObject);
		}

		string[] names = dataManager.GetFoodNames ("price");
		//Killing three entries:: 
		int x = Random.Range (0,16);	
		int y = Random.Range (0,16);
		while (y == x){
		   y = Random.Range (0,16);
		}

		int z = Random.Range (0,16);
		while (z == x || z == y){
		   z = Random.Range (0,16);
		}
				
		foreach (string name in names){
			if ((dataManager.GetData (name, "index") != x) && (dataManager.GetData (name, "index") != y) && (dataManager.GetData (name, "index") !=z)) {
			GameObject go = (GameObject)Instantiate (DataList);
			go.transform.SetParent (this.transform, false);
			go.transform.Find("Name").GetComponent<Text>().text = name;
			if (dataManager.GetData (name, "finalprice") < 1) {
				dataManager.setPrice (name);
			}
			if (dataManager.GetData (name, "stock") == 15) {
				dataManager.setStock (name);
			}
			go.transform.Find("Stock").GetComponent<Text>().text = dataManager.GetData(name, "stock").ToString();
			go.transform.Find("Have").GetComponent<Text>().text = dataManager.GetData(name, "have").ToString();
			go.transform.Find("Price").GetComponent<Text>().text = dataManager.GetData(name, "finalprice").ToString();
			
			}
		}
	}
	public void BuySell(){
//		Debug.Log ("You have entered the store! Kind of.. ");
//
//		GameObject myButton = Instantiate (buySellPanel) as GameObject;
//		myButton.transform.SetParent(buySellPanel.transform);
	}
}
