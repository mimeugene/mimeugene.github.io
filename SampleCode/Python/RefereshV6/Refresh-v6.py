__author__ = 'Mim'
# Eugene Mim
# Startup-v1
# 02.25.16


import win32gui, win32con
import time
import re
import win32com.client
import win32ui
from win32gui import GetWindowText, GetForegroundWindow
import ctypes




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


while True:
    time.sleep(5)
    print GetWindowText(GetForegroundWindow())
    now = time.localtime()
    if now.tm_min % 30 == 0:

        if WindowExists("IEFrame"):
            w.find_window_wildcard(".*Internet Explorer.*")
            time.sleep(1)
            w.show_window()
            time.sleep(1)
            x = 0
            while ("Internet Explorer" not in GetWindowText(GetForegroundWindow())) and (x < 7):
                time.sleep(2)
                ctypes.windll.user32.keybd_event(0x12, 0, 0, 0)
                time.sleep(.5)
                ctypes.windll.user32.keybd_event(0x1B, 0, 0, 0)
                time.sleep(.5)
                ctypes.windll.user32.keybd_event(0x1B, 0, 0x0002, 0)
                ctypes.windll.user32.keybd_event(0x12, 0, 0x0002, 0)
                x = x + 1
            time.sleep(1)
            shell.SendKeys("{F5}")

        time.sleep(5)

        if WindowExists("MozillaWindowClass"):
            w.find_window_wildcard(".*Firefox.*")
            time.sleep(1)
            w.show_window()
            time.sleep(1)
            x = 0
            while ("Firefox" not in GetWindowText(GetForegroundWindow())) and (x < 7):
                time.sleep(2)
                ctypes.windll.user32.keybd_event(0x12, 0, 0, 0)
                time.sleep(.5)
                ctypes.windll.user32.keybd_event(0x1B, 0, 0, 0)
                time.sleep(.5)
                ctypes.windll.user32.keybd_event(0x1B, 0, 0x0002, 0)
                ctypes.windll.user32.keybd_event(0x12, 0, 0x0002, 0)
                x = x + 1
            time.sleep(1)
            shell.SendKeys("{F5}")

        time.sleep(5)

        if WindowExists("Chrome_WidgetWin_1"):
            w.find_window_wildcard(".*Chrome.*")
            time.sleep(1)
            w.show_window()
            time.sleep(1)
            x = 0
            while ("Chrome" not in GetWindowText(GetForegroundWindow())) and (x < 7):
                time.sleep(2)
                ctypes.windll.user32.keybd_event(0x12, 0, 0, 0)
                time.sleep(.5)
                ctypes.windll.user32.keybd_event(0x1B, 0, 0, 0)
                time.sleep(.5)
                ctypes.windll.user32.keybd_event(0x1B, 0, 0x0002, 0)
                ctypes.windll.user32.keybd_event(0x12, 0, 0x0002, 0)
                x = x + 1
            time.sleep(1)
            shell.SendKeys("{F5}")

        time.sleep(5)
        continue

