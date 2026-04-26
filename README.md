# 高通410随身WiFi —— 在线云编译 OpenWrt

经常遇见找不到好的固件，不是软件源不能安装，就是版本太老，要不就是别人固件装了自己不需要的插件功能。那就直接编译一个属于自己的openwrt刷机包，简单几步就可以完成编译，本地不需要装任何环境，不需要懂 Linux，不需要懂编译，编译好的固件包傻瓜化一键刷机。

- 每次编译自动拉取 ImmortalWrt 官方最新源码
- 想要什么插件自己填，编出来的固件完全是你决定
- 底包极致优化，不用担心各种bug。
- 支持自定义输入插件包，驱动包，主题包，python包，perl包，lib包，等等。
---

## 编译固件步骤

1. 先把本仓库FOrk到自己账号下
![拉流仓库](img/0.png)

2. **Actions** → **Build_imm_高通410系列** → **Run workflow** → 选择设备型号 → 填写需要插件包 → Run workflow 开始编译
![编译教程](img/1.png)

3. 编译约⏱️ 1.5-2 小时，插件越多时间越长.
![编译过程](img/2.png)

4. **Releases** → 找到你编译的对应版本 → 下载你编译的版本（OpenWrt_xxx_xxx_刷机包.zip 解压即刷）
![下载固件包](img/3.png)

5. 如果你原本系统是linux或openwrt系统，就可以按照下面步骤升级就行。
![升级固件](img/4.png)

如果你设备没刷过linux或者openwrt，还是原版安卓，就按下面教程刷入，注意必须备份分区。
![安卓刷入openwrt固件](img/5.png)

---

### 推荐插件配置（可直接复制粘贴）

- 基础：`luci-app-ttyd`
- 科学上网：`luci-app-openclash`
- 去广告：`luci-app-adbyby-plus,luci-app-adblock`
- 常用组合：`luci-app-ttyd,luci-app-adbyby-plus,luci-app-accesscontrol`
---
## 支持的设备型号

| 型号 | 说明 |
|-----|------|
| ufi003 | 默认，手里有这个板子，优化比较好 |
| jz02v10 | 已支持 |
| ufi001c | 已支持 |
| ufi001b | 已支持 |
| ufi103s | 已支持 |
| qrzl903 | 已支持 |
| w001 | 已支持 |
| uz801 | 已支持 |
| mf32 | 已支持 |
| mf601 | 已支持 |
| wf2 | 已支持 |
| sp970v11 | 已支持 |
| sp970v10 | 已支持 |

---
### 已启用的默认插件（共3个）不要把这3个插件添加编辑固件里面。

| 序号 | 插件 | 说明 | 菜单位置 |
|-----|-----|------|---------|
| 1 | luci-theme-argon  | argon主题插件 | 国内比较火的主题 |
| 2 | luci-app-package-manager | 软件包管理 | 系统 → 软件包 |
| 3 | luci-app-firewallr | 防火墙插件 | 系统 → 防火墙 |
### 已启用的默认驱动模块，请不要重复添加。

| 序号 | 插件 | 说明 | 菜单位置 |
|-----|-----|------|---------|
| 4 | kmod-usb-common | USB 公共模块 | 内核模块 |
| 5 | kmod-usb-core | USB 核心模块 | 内核模块 |
| 6 | kmod-usb-gadget | USB Gadget 框架 | 内核模块 |
| 7 | kmod-usb-gadget-eth | USB Gadget 以太网 | 内核模块 |
| 8 | kmod-usb-gadget-functionfs | USB Gadget FunctionFS | 内核模块 |
| 9 | kmod-usb-gadget-mass-storage | USB Gadget 大容量存储 | 内核模块 |
| 10 | kmod-usb-gadget-ncm | USB Gadget NCM 网络 | 内核模块 |
| 11 | kmod-usb-gadget-serial | USB Gadget 串口 | 内核模块 |
| 12 | kmod-usb-lib-composite | USB 复合设备库 | 内核模块 |
| 13 | kmod-usb-net | USB 网络驱动 | 内核模块 |
| 14 | kmod-usb-net-cdc-ether | USB CDC Ethernet 驱动 | 内核模块 |
| 15 | kmod-usb-net-cdc-ncm | USB CDC NCM 驱动 | 内核模块 |
| 16 | kmod-usb-net-huawei-cdc-ncm | 华为 CDC NCM 驱动 | 内核模块 |
| 17 | kmod-usb-net-rndis | USB RNDIS 网络驱动 | 内核模块 |
| 18 | kmod-usb-serial | USB 串口驱动 | 内核模块 |
| 19 | kmod-usb-serial-option | USB 串口 Option 驱动 | 内核模块 |
| 20 | kmod-usb-serial-wwan | USB 串口 WWAN 驱动 | 内核模块 |
| 21 | kmod-usb-wdm | USB WDM 驱动 | 内核模块 |
### 已添加第三方源码插件库。

| 序号 | 地址 | 说明 | 使用方法 |
|-----|-----|------|------|
| 1 | https://github.com/kenzok8/small-package | 常用OpenWrt软件包源码合集 | 在编译时填写插件名 |
---
### 已禁用的内核调试信息

减少固件体积约50-100MB：

| 配置项 | 说明 | 状态 |
|-------|------|------|
| CONFIG_KERNEL_DEBUG_FS | 调试文件系统 | 禁用 太占内存 |
| CONFIG_KERNEL_DEBUG_KERNEL | 内核调试日志 | 禁用 太占内存 |
| CONFIG_KERNEL_DEBUG_INFO | 完整调试符号 | 禁用 太占内存 |
| CONFIG_KERNEL_KALLSYMS | 内核符号表 | 禁用 太占内存 |

---

## 特别感谢

- [xuxin1955/Actions-immortalwrt](https://github.com/xuxin1955/Actions-immortalwrt) 感谢作者提供技术

## Credits

- [Microsoft Azure](https://azure.microsoft.com)
- [GitHub Actions](https://github.com/features/actions)
- [OpenWrt](https://github.com/openwrt/openwrt)
- [ImmortalWrt](https://github.com/xuxin1955/immortalwrt)
- [coolsnowwolf/lede](https://github.com/coolsnowwolf/lede)
- [Mikubill/transfer](https://github.com/Mikubill/transfer)
- [softprops/action-gh-release](https://github.com/softprops/action-gh-release)
- [Mattraks/delete-workflow-runs](https://github.com/Mattraks/delete-workflow-runs)
- [dev-drprasad/delete-older-releases](https://github.com/dev-drprasad/delete-older-releases)
- [peter-evans/repository-dispatch](https://github.com/peter-evans/repository-dispatch)



## License

[MIT](https://github.com/P3TERX/Actions-OpenWrt/blob/main/LICENSE) © [**P3TERX**](https://p3terx.com)
