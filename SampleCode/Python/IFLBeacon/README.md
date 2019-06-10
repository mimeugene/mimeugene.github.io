# IFLBeacon


In order for IFLbeacon to ping the lighthouse, __one of two parameters should be met__:
1. LogMeIn name should be populated and include classroom ID in brackets {}
2. lmi.txt __should exist within root C:\\__ with the exact naming convention that LogMeIn would have. (will be manually entered in case LogMeIn is not installed / not compatible / last resort)

The LogMeIn ID function reads the registry entry "DisplayName" and takes preference over lmi.txt. In the case that both are not populated, and no ID is present, no data is sent over to the lighthouse.

If the support team updates LMI display name from their end (remotely), restarting the service will be required for the app to pick up the new name. This can be achieved through stopping / starting the service or rebooting the machine. Updating lmi.txt will cause the program to pick it up on the next loop, within 60 seconds.



Example LogMeIn ID entry: [DC] CapitolHill-Warrick-01{242}

"DC" will be the district.
"CapitolHill" will be the school name.
"Warrick" will be the teacher.
"242" will be the ID

This naming convention should be kept static across all machines. In the case where the spacings or dashes aren't correct, it should still send over the ID, given it's surrounded by {}.
