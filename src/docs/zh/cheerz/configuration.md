# 键位配置

## 01 - 矩阵测试

- 推荐连接至vial时先进行矩阵测试查看各键位是否已经安装完全。

![](/configuration/matrix_tester.jpg)

## 02 - 键位保存{#keysave}

### 被动键位保存
- Cheerz在离开有线模式（即拔掉连接数据线）时，将自动进行一次键位保存，时长约5秒，请在这5秒内不要进行其他操作，否则保存过程将中断。如果键盘没有连接电池将不会进行被动键位保存，需要在调整键位后进行主动的键位保存。

### 主动键位保存
- 在键位配置的User栏下有S_DATA键，将这个键值设置到你习惯的位置，触发时键盘将进行一次主动的键位保存，和被动键位保存一样，该过程会持续大约5秒，请在按下S_DATA键值后等待至少5秒。

![](/configuration/save_data.jpg)

## 03 - 键盘睡眠和关机

### 睡眠

- 绑定键值KB_SLP，触发后键盘进入睡眠，睡眠状态下任意按键将会唤醒键盘，适合放在工位之类固定位置上每天离开时使用

![](/configuration/KB_Sleep.jpg)

### 关机

- 绑定键值KB_OFF，触发后键盘进入关机状态，关机状态下需要按组合键  [<font color=red> 空格+s </font>] 或直接进行有线连接开机

	***组合键中的空格和S指对应的键值，实际的物理位置为用户自己设定的位置，所以当没有设置空格和S键时无法通过按键开机，需要进行有线连接开机***

![](/configuration/KB_Off.jpg)

## 04 - 键盘固件烧录

***<font color=red>请在有线连接下操作，PC/MAC环境均可</font>***

- 绑定键值KB_DFU，触发后键盘进入DFU模式，vial失去设备识别。同时键盘有线连接的设备上会出现一个名为Zorokb_ada的驱动器

![](/configuration/KB_DFU.jpg)

![](/configuration/dfu_disk.jpg)

- 将.uf2固件文件直接拖入该驱动器，键盘会开始烧录固件。

![](/configuration/dfu_drag.jpg)

- 固件烧录完成后，设备可能会出现异常报错（mac端会同时提示磁盘非正常推出），均为正常现象，可以直接关闭。此时键盘固件已经烧录完成，键盘自动退出DFU模式并恢复进行有线连接，vial也可以正常识别到。

![](/configuration/dfu_warning.jpg)

## 05 - 2.4G接收器固件烧录{#dflash}

***键盘在<font color=red>有线或2.4G连接</font>下，确保接收器连接到主机，PC/MAC环境均可***

- 按下配置好的<font color=red>**KC_DFU**</font>键，​2.4G接收器将进入DFU模式，主机上将出现名字为<font color=red>**Zorokb_24g**</font>的驱动器.

![](/configuration/kcdfu_disk.jpg)


- 把以"Zoro-kbd-2.4G-Receiver"开头的.uf2接收器固件文件直接拖入驱动中，接收器开始固件烧录。

![](/configuration/kcdfu_drag.jpg)

- 和键盘一样，烧录完成后，设备可能会出现类似的报错信息，次数固件已经正常更新完成可以直接关闭。重新插拔接收器，接收器将退出DFU模式并可以直接连接键盘。

- 另外，连接接收器并打开Vial时，会看见vial可以读取到名为"Zoroada ZORO KBD 2.4G Receiver"的，键位只有一个按键的设备，其中的配置修改等均不会有任何作用，也不影响接收器的正常使用，忽略即可。