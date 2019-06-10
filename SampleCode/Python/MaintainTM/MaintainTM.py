__author__ = 'Mim'
# Eugene Mim
# MaintainTM
# 05.07.18

import os
import Skype4Py
import win32gui, win32con
import time
import re
import win32com.client
import win32ui
import win32con
from win32gui import GetWindowText, GetForegroundWindow
import ctypes


skype = Skype4Py.Skype()
loop1 = False
loop2 = False
loop3 = False
loop4 = False
loop5 = False


class WindowMgr:
        #Encapsulates some calls to the winapi for window management
    def __init__ (self):
        """Constructor"""
        self._handle = None

    def find_window(self, class_name, window_name = None):
        #find a window by its class_name
        self._handle = win32gui.FindWindow(class_name, window_name)

    def _window_enum_callback(self, hwnd, wildcard):
        #Pass to win32gui.EnumWindows() to check all the opened windows
        if re.match(wildcard, str(win32gui.GetWindowText(hwnd))) != None:
            self._handle = hwnd

    def find_window_wildcard(self, wildcard):
        self._handle = None
        win32gui.EnumWindows(self._window_enum_callback, wildcard)

    def set_foreground(self):
        #put the window in the foreground
        win32gui.SetForegroundWindow(self._handle)

    def show_window(self):
        #maximize window
        win32gui.ShowWindow(self._handle, win32con.SW_MAXIMIZE)


def WindowExists(classname):
    try:
        win32ui.FindWindow(classname, None)
    except win32ui.error:
        return False
    else:
        return True

w = WindowMgr()
shell = win32com.client.Dispatch("WScript.Shell")


def skype_settings():
    print "trying"
    if skype.Client.IsRunning:
        try:
            skype._SetCurrentUserStatus('ONLINE')
            skype.Attach()
            skype.Settings._SetRinger('Speakers (High Definition Audio Device)')
        except:
            pass


def launch_skype():
    if skype.Client.IsRunning:
        try:
            skype.Attach()
        except:
            pass

    elif skype.Client.IsRunning is False:
        try:
            os.startfile("C:\Program Files (x86)\Skype\Phone\Skype.exe")
        except:
            pass



def launch_chrome():
    if WindowExists("Chrome_WidgetWin_1") == False:
        try:
            os.startfile("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
        except:
            pass

while True:
    time.sleep(5)
    now = time.localtime()

    if (now.tm_min % 33 == 0 and loop1 == False and now.tm_min != 00):
        loop4 = False
        loop1 = True
        launch_skype()

    if (now.tm_min % 36 == 0 and loop2 == False and now.tm_min != 00):
        loop2 = True
        launch_chrome()

    if (now.tm_min % 40 == 0 and loop3 == False and now.tm_min != 00):
        loop3 = True
        skype_settings()

    if (now.tm_min % 59 == 0 and loop4 == False and now.tm_min != 00):
        loop1 = False
        loop2 = False
        loop3 = False
