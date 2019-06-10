using System;
using UnityEngine;

namespace AssemblyCSharp
{
	public class Persistance
	{
		void Start () {
			int easyMode = 1;
		}
		void StoreHighscore(int newHighscore)
		{
			int oldHighscore = PlayerPrefs.GetInt("highscore", 0);    
			if (newHighscore > oldHighscore)
			PlayerPrefs.SetInt("highscore", newHighscore);
		}

		void UpdateTotalScore(int currentGameScore)
		{
			int oldOverallGameScore = PlayerPrefs.GetInt ("OverallGameScore", 0);
			int	newOverallGameScore = oldOverallGameScore + currentGameScore;
			PlayerPrefs.SetInt("OverallGameScore", newOverallGameScore);
		}
	}
}

