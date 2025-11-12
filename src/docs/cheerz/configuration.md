# Key Configuration

## 01 - Matrix Test

- It is recommended to run a matrix test in Vial first to check whether all switches have been fully installed.

![](/configuration/matrix_tester.jpg)

## 02 - Keymap Saving (firmware v2025-03){#keysave}

### Passive Key Saving
- When Cheerz leaves wired mode (i.e., the usb-c cable is unplugged), it will automatically perform a keymap save. This process takes about 5 seconds. Do not perform any operations during this period, or the save will be interrupted. If the keyboard is not connected to a battery, passive saving will not take place. In that case, you need to perform an active key save after editing the keymap.

### Active Key Saving
- In the **User** tab of Keymap in Vial, there is a key called **<font color=red>S_DATA</font>**. Assign it to any position you prefer. When triggered, the keyboard will perform an active key save. Like the passive save, it takes about 5 seconds, so wait at least 5 seconds after pressing the S_DATA key.

![](/configuration/save_data.jpg)

## 03 - Sleep & Power Off

### Sleep

- Bind the key value **<font color=red>KB_SLP</font>**. After triggering it, the keyboard enters sleep mode. Pressing any key will wake it up. This is suitable for use at a fixed workstation when leaving temporarily.

![](/configuration/KB_Sleep.jpg)

### Power Off

- Bind the key value **<font color=red>KB_OFF</font>**. After triggering it, the keyboard enters power-off mode. To turn it back on, press the key combo **[<font color=red>Space + S</font>]** or connect via a wired connection.

	***“Space” and “S” in the key combo refer to their assigned key values, not fixed physical positions. If you haven't assigned Space or S, you cannot wake the keyboard via key combo and must use a wired connection to power it on.***

![](/configuration/KB_Off.jpg)

## 04 - Keyboard Firmware Flashing

***<font color=red>Please perform this over a wired connection. Works on both PC and Mac</font>***

- Bind the key value **<font color=red>KB_DFU</font>**. After triggering it, the keyboard enters DFU mode, and Vial will no longer recognize the device. At the same time, a drive named **<font color=red>Zorokb_ada</font>** will appear on the device Cheerz is connected to.

![](/configuration/KB_DFU.jpg)

![](/configuration/dfu_disk.jpg)

- Drag the .uf2 firmware file directly into this drive. The keyboard will start flashing the firmware.

![](/configuration/dfu_drag.jpg)

- After flashing completes, an error prompt may appear (on macOS, it may also show a “disk not ejected properly” warning). This is normal—just close it. At this point, the firmware has already been flashed. The keyboard will automatically exit DFU mode, reconnect in wired mode, and Vial should recognize it again.

![](/configuration/dfu_warning.jpg)

## 05 - 2.4G Dongle Firmware Flashing{#dflash}

***Connect the keyboard via a <font color=red>wired or 2.4GHz connection</font> and the 2.4GHz dongle must be plugged into the device. Works on both PC and Mac***

- Press the pre-configured <font color=red>**KC_DFU**</font>​ key to put the 2.4G dongle into DFU mode. A drive named <font color=red>**Zorokb_24G**</font> will then appear on the host.

![](/configuration/kcdfu_disk.jpg)


- Drag and drop the .uf2 firmware file starting with "Zoro-kbd-2.4G-Receiver" onto the drive. The dongle will begin flashing the firmware.

![](/configuration/kcdfu_drag.jpg)

- After the flashing process is complete, you may see the similar error prompts, but the firmware has been successfully updated. To proceed, unplug the dongle from the host and plug it back in. The dongle will then exit DFU mode and be ready for use.

- Also, after connecting the dongle and launching Vial, an interface named "Zoroada ZORO KBD 2.4G Receiver" may appear, showing only a single key. Any configuration changes on this interface are non-functional and will not affect the dongle’s normal use. Please disregard it.