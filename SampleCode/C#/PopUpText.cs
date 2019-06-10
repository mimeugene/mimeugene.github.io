using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class PopUpText : MonoBehaviour

{
	public Text myText;
	public static string newString;
	public Image popUpTextPanel;
	float fadeTime = 1f;
	Color colorToFadeTo;
	Color colorToFadeTo2;
	public static bool textActive =false;
	public GameObject popUpTextButton;
	// can ignore the update, it's just to make the coroutines get called for example
	public static int changerPopUp = 0;
	public static bool removePopUp = false;

//	void Awake(){
////		changerPopUp = 0;
//	}
	void Update(){
		if (removePopUp == true) {
			if (myText.color.a > .99f) {
				StopCoroutine (FadeIn (1f, myText, newString));
				StartCoroutine (FadeOut (1f, myText));
				removePopUp = false;
			}
		}

		if (changerPopUp > 0) {
//			StopCoroutine(FadeOut(1f, myText));
			StartCoroutine(FadeIn(1f, myText, newString));
			StopCoroutine(FadeIn(1f, myText, newString));
			changerPopUp = 0;
		}

	}

	public void removepopUpText(){
//		FadeOut();
		if (myText.color.a > .999f) {
			StopCoroutine (FadeIn (1f, myText, newString));
			StartCoroutine (FadeOut (1f, myText));
		}

		//		StartCoroutine(FadeIn (1f, GetComponentInParent<Text>(), ""));
	}

	public IEnumerator FadeIn(float t, Text i, string j)
	{
		i.text = j;
//		i.color = new Color(i.color.r, i.color.g, i.color.b, 0);
		while (i.color.a < 1.0f)
		{
			popUpTextPanel.color = new Color(0, 0, 0, .5f + (Time.deltaTime / t));
			i.color = new Color(i.color.r, i.color.g, i.color.b, i.color.a + (Time.deltaTime / t));
			yield return null;
		}
		textActive = true;

	}

	public IEnumerator FadeOut(float t, Text i)
	{

		for (float z = .5f; z >= 0; z -= Time.deltaTime)
		{
			// set color with i as alpha
			popUpTextPanel.color = new Color(0, 0, 0, z);
			myText.color = new Color(i.color.r, i.color.g, i.color.b, z);
			yield return null;
			textActive = false;
		}
	}
}
