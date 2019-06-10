using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class MenuScript : MonoBehaviour {

	public void OnStartGame(){
		Debug.Log ("This should work");
	
	}

	public void Load1()
	{
		Application.LoadLevel(1);
	}

	public void LoadScores()
	{
		Application.LoadLevel(2);
	}

	public void LoadIntro()
	{
		Application.LoadLevel(3);
	}

	public void LoadStartMoney()
	{
		Application.LoadLevel(4);
	}

	public void LoadMap()
	{
		Application.LoadLevel(5);
	}

	public void LoadHurtlePoole()
	{
		Application.LoadLevel(6);
	}

	public void LoadCoombe()
	{
		Application.LoadLevel(7);
	}

	public void LoadEastcliff()
	{
		Application.LoadLevel(8);
	}

	public void LoadCrossroads()
	{
		Application.LoadLevel(9);
	}

	public void LoadFrostford()
	{
		Application.LoadLevel(5);
	}

	public void LoadWillowdale()
	{
		Application.LoadLevel(11);
	}

	public void LoadWindrip()
	{
		Application.LoadLevel(12);
	}

	public void LoadOakHarbor()
	{
		Application.LoadLevel(13);
	}
}
