// ============================================================
// 多语言文本
// ============================================================
const I18N = {
  zh: {
    title: "OpenWrt 云编译",
    subtitle: "勾选需要的功能，一键触发 GitHub Actions 编译属于你的固件",
    auth_title: "GitHub 认证",
    guide_title: "第一次使用？点这里查看操作步骤",
    guide_step1: '前往 <a href="https://github.com" target="_blank">GitHub</a> 注册账号（已有账号跳过）',
    guide_step2: "打开",
    guide_step2b: "点右上角 Fork 把仓库复制到你自己账号下",
    guide_step3: "进入你 Fork 后的仓库 → Settings → Pages → Source 选 GitHub Actions → 保存",
    guide_step4: "点击",
    guide_step4b: "勾选 repo 权限，生成后复制",
    guide_step5: "在下方填入你的仓库地址和 Token，点验证连接",
    repo_label: "仓库地址",
    repo_placeholder: "yourname/immortalwrt-Actiosn",
    token_label: "Personal Access Token",
    token_gen: "生成 Token ↗",
    show: "显示", hide: "隐藏",
    verify: "验证连接",
    remember_token: "记住 Token（仅存本地，不上传）",
    device_title: "选择硬件平台与设备型号",
    plugin_title: "选择插件功能",
    plugin_search: "🔍 搜索插件...",
    clear_all: "清空勾选",
    custom_pkg_title: "自定义包名",
    custom_pkg_hint: "手动输入包名，多个用空格或逗号分隔，会与上方勾选合并",
    custom_pkg_placeholder: "例如：luci-app-ttyd luci-app-openclash kmod-tcp-bbr",
    final_pkgs: "最终包名：",
    copy: "复制", copied: "已复制 ✓",
    sys_title: "系统设置",
    optional: "可选",
    sys_ip: "管理 IP",
    sys_hostname: "主机名",
    sys_upstream: "上游源码",
    sys_hash: "指定 Hash",
    sys_hash_hint: "留空用锁定版本",
    sys_hash_placeholder: "留空即可",
    build_title: "开始编译",
    build_btn: "触发编译",
    footer: '基于 <a href="https://github.com/immortalwrt/immortalwrt" target="_blank">ImmortalWrt</a> · 编译运行在 GitHub Actions · Token 仅存储在你的浏览器本地',
    // 设备平台
    platform_desc_msm8916: "随身WiFi / 4G CPE",
    series_main: "随身WiFi 系列",
    device_recommended: "推荐",
    // 插件分类
    cat_proxy: "🌐 科学上网",
    cat_dns: "🔍 DNS 工具",
    cat_adblock: "🛡️ 广告过滤",
    cat_monitor: "📊 网络监控",
    cat_traffic: "⚡ 流量控制",
    cat_tools: "🔧 系统工具",
    cat_network: "🌍 网络功能",
    cat_vpn: "🔒 VPN 隧道",
    cat_tunnel: "🚇 内网穿透",
    cat_sim: "📱 SIM卡 / 移动网络",
    cat_theme: "🎨 主题",
    cat_storage: "🗄️ 存储 / 下载",
    cat_access: "🔐 访问控制",
    cat_docker: "🐳 Docker 容器",
    cat_store: "🏪 应用商店",
    cat_game: "🎮 游戏加速",
    cat_media: "🎵 影音媒体",
    // build summary
    sum_device: "设备型号",
    sum_pkgs: "插件包",
    sum_ip: "管理 IP",
    sum_hostname: "主机名",
    sum_no_pkg: "无（仅默认）",
    sum_ip_default: "192.168.1.1（默认）",
    sum_hostname_default: "ImmortalWrt（默认）",
    // status
    err_fill: "请填写仓库地址和 Token",
    err_repo_fmt: "仓库格式错误，应为：用户名/仓库名",
    verifying: "⏳ 验证中...",
    ok_verified: "✅ 验证成功！仓库：",
    private: "私有", public: "公开",
    err_token: "❌ Token 无效或已过期，请重新生成",
    err_repo: "❌ 仓库不存在，请检查仓库地址是否正确",
    err_http: "❌ 验证失败（HTTP ",
    err_net: "❌ 网络错误，请检查网络连接",
    building: "⏳ 正在触发编译...",
    ok_built: "✅ 编译已触发！预计 1.5~2 小时完成。<br>👉 <a href=\"{url}\" target=\"_blank\">点此查看编译进度 ↗</a><br><span style='color:var(--text-muted)'>编译完成后在仓库 Releases 页面下载固件。如果编译失败，可在 Actions 日志里查看报错原因，常见原因：包名不存在、源码冲突。</span>",
    err_no_wf: "未找到编译 Workflow，请确认仓库中存在编译 Action",
    err_wf_list: "获取 workflow 列表失败（HTTP ",
    err_branch: "触发失败，请检查仓库默认分支名称",
    err_trigger: "触发失败（HTTP ",
  },
  en: {
    title: "OpenWrt Cloud Build",
    subtitle: "Select plugins and trigger GitHub Actions to build your own firmware",
    auth_title: "GitHub Authentication",
    guide_title: "First time? Click here for setup steps",
    guide_step1: 'Go to <a href="https://github.com" target="_blank">GitHub</a> and register (skip if you have an account)',
    guide_step2: "Open",
    guide_step2b: "click Fork in the top right to copy it to your account",
    guide_step3: "Go to your forked repo → Settings → Pages → Source: GitHub Actions → Save",
    guide_step4: "Click",
    guide_step4b: "check repo permission, generate and copy",
    guide_step5: "Fill in your repo address and Token below, then click Verify",
    repo_label: "Repository",
    repo_placeholder: "yourname/immortalwrt-Actiosn",
    token_label: "Personal Access Token",
    token_gen: "Generate Token ↗",
    show: "Show", hide: "Hide",
    verify: "Verify",
    remember_token: "Remember Token (stored locally, never uploaded)",
    device_title: "Select Hardware Platform & Device",
    plugin_title: "Select Plugins",
    plugin_search: "🔍 Search plugins...",
    clear_all: "Clear All",
    custom_pkg_title: "Custom Packages",
    custom_pkg_hint: "Enter package names separated by space or comma, merged with selections above",
    custom_pkg_placeholder: "e.g. luci-app-ttyd luci-app-openclash kmod-tcp-bbr",
    final_pkgs: "Final packages:",
    copy: "Copy", copied: "Copied ✓",
    sys_title: "System Settings",
    optional: "Optional",
    sys_ip: "Admin IP",
    sys_hostname: "Hostname",
    sys_upstream: "Upstream Repo",
    sys_hash: "Specific Hash",
    sys_hash_hint: "Leave empty to use locked version",
    sys_hash_placeholder: "Leave empty",
    build_title: "Start Build",
    build_btn: "Trigger Build",
    footer: 'Based on <a href="https://github.com/immortalwrt/immortalwrt" target="_blank">ImmortalWrt</a> · Builds run on GitHub Actions · Token stored in your browser only',
    platform_desc_msm8916: "Portable WiFi / 4G CPE",
    series_main: "Portable WiFi Series",
    device_recommended: "Recommended",
    cat_proxy: "🌐 Proxy / VPN",
    cat_dns: "🔍 DNS Tools",
    cat_adblock: "🛡️ Ad Blocking",
    cat_monitor: "📊 Network Monitor",
    cat_traffic: "⚡ Traffic Control",
    cat_tools: "🔧 System Tools",
    cat_network: "🌍 Network Features",
    cat_vpn: "🔒 VPN Tunnel",
    cat_tunnel: "🚇 Intranet Tunnel",
    cat_sim: "📱 SIM / Mobile",
    cat_theme: "🎨 Themes",
    cat_storage: "🗄️ Storage / Download",
    cat_access: "🔐 Access Control",
    cat_docker: "🐳 Docker",
    cat_store: "🏪 App Store",
    cat_game: "🎮 Game Accelerator",
    cat_media: "🎵 Media & Entertainment",
    sum_device: "Device",
    sum_pkgs: "Packages",
    sum_ip: "Admin IP",
    sum_hostname: "Hostname",
    sum_no_pkg: "None (defaults only)",
    sum_ip_default: "192.168.1.1 (default)",
    sum_hostname_default: "ImmortalWrt (default)",
    err_fill: "Please fill in repository and Token",
    err_repo_fmt: "Invalid format, should be: username/repo",
    verifying: "⏳ Verifying...",
    ok_verified: "✅ Verified! Repo: ",
    private: "private", public: "public",
    err_token: "❌ Token invalid or expired, please regenerate",
    err_repo: "❌ Repository not found, check the address",
    err_http: "❌ Verification failed (HTTP ",
    err_net: "❌ Network error, check your connection",
    building: "⏳ Triggering build...",
    ok_built: "✅ Build triggered! Estimated 1.5~2 hours.<br>👉 <a href=\"{url}\" target=\"_blank\">View build progress ↗</a><br><span style='color:var(--text-muted)'>Download firmware from Releases when done. If build fails, check the Actions log. Common causes: invalid package name, source conflict.</span>",
    err_no_wf: "Build Workflow not found, check your repository",
    err_wf_list: "Failed to list workflows (HTTP ",
    err_branch: "Trigger failed, check your default branch name",
    err_trigger: "Trigger failed (HTTP ",
  }
};

// ============================================================
// 设备数据（key 引用 i18n）
// ============================================================
const PLATFORMS = [
  {
    id: "msm8916",
    name: "高通 MSM8916 (410)",
    icon: "📡",
    descKey: "platform_desc_msm8916",
    series: [
      {
        nameKey: "series_main",
        devices: [
          { id: "ufi003",   name: "UFi003",   recommended: true },
          { id: "ufi001c",  name: "UFi001C" },
          { id: "ufi001b",  name: "UFi001B" },
          { id: "ufi103s",  name: "UFi103S" },
          { id: "jz02v10",  name: "JZ02v10" },
          { id: "qrzl903",  name: "QRZL903" },
          { id: "w001",     name: "W001" },
          { id: "uz801",    name: "UZ801" },
          { id: "mf32",     name: "MF32" },
          { id: "mf601",    name: "MF601" },
          { id: "wf2",      name: "WF2" },
          { id: "sp970v11", name: "SP970v11" },
          { id: "sp970v10", name: "SP970v10" },
        ]
      },
    ]
  },
  // 新增平台示例（取消注释即可）:
  // { id: "msm8953", name: "高通 MSM8953 (625)", icon: "📡", descKey: "platform_desc_msm8953", series: [...] },
];

const DEVICES = PLATFORMS.flatMap(p => p.series.flatMap(s => s.devices));

// ============================================================
// 插件分类数据（分类标题用 i18n key）
// ============================================================
const PLUGIN_CATEGORIES = [
  {
    titleKey: "cat_proxy",
    plugins: [
      { pkg: "luci-app-openclash", hot: true,  name: "OpenClash",   icon: "🐱", desc: { zh: "Clash 代理客户端",      en: "Clash proxy client" } },
      { pkg: "luci-app-passwall",  hot: true,  name: "PassWall",    icon: "🧱", desc: { zh: "多协议代理工具",        en: "Multi-protocol proxy" } },
      { pkg: "luci-app-passwall2",             name: "PassWall2",   icon: "🧱", desc: { zh: "PassWall 第二版",       en: "PassWall v2" } },
      { pkg: "luci-app-ssr-plus",  hot: true,  name: "SSR Plus+",   icon: "✈️", desc: { zh: "ShadowSocksR 增强版",  en: "ShadowSocksR enhanced" } },
      { pkg: "luci-app-vssr",                  name: "VSSR",        icon: "🔀", desc: { zh: "V2Ray/Xray 代理",      en: "V2Ray/Xray proxy" } },
      { pkg: "luci-app-mihomo",                name: "Mihomo",      icon: "🐱", desc: { zh: "Mihomo 代理内核",      en: "Mihomo proxy core" } },
      { pkg: "luci-app-helloworld",            name: "Hello World", icon: "🌍", desc: { zh: "多协议代理客户端",     en: "Multi-protocol proxy" } },
      { pkg: "luci-app-xray",                  name: "Xray",        icon: "🔀", desc: { zh: "Xray 代理内核",        en: "Xray proxy core" } },
      { pkg: "luci-app-vpnbypass",             name: "VPN 绕过",    icon: "🔀", desc: { zh: "VPN 分流绕过",         en: "VPN bypass" } },
    ]
  },
  {
    titleKey: "cat_dns",
    plugins: [
      { pkg: "luci-app-smartdns",              name: "SmartDNS",      icon: "🔍", desc: { zh: "智能 DNS 解析加速",    en: "Smart DNS resolver" } },
      { pkg: "luci-app-mosdns",                name: "MosDNS",        icon: "🔍", desc: { zh: "DNS 分流与过滤",       en: "DNS routing & filter" } },
      { pkg: "luci-app-adguardhome", hot: true, name: "AdGuard Home", icon: "🛡️", desc: { zh: "全网广告/追踪拦截",   en: "Full ad & tracker block" } },
      { pkg: "luci-app-dnsforwarder",           name: "DNS Forwarder", icon: "🔍", desc: { zh: "DNS 转发器",           en: "DNS forwarder" } },
      { pkg: "luci-app-dns-filter",             name: "DNS 过滤器",    icon: "🔍", desc: { zh: "DNS 层广告过滤",       en: "DNS-level ad filter" } },
    ]
  },
  {
    titleKey: "cat_adblock",
    plugins: [
      { pkg: "luci-app-adbyby-plus",  name: "AdByby Plus+",   icon: "🚫", desc: { zh: "广告过滤（视频广告）", en: "Ad filter (video ads)" } },
      { pkg: "luci-app-adblock",      name: "AdBlock",        icon: "🚫", desc: { zh: "DNS 广告过滤",         en: "DNS ad blocking" } },
      { pkg: "luci-app-ikoolproxy",   name: "iKoolProxy",     icon: "🚫", desc: { zh: "滤广告",               en: "Ad filter" } },
      { pkg: "luci-app-adblock-plus", name: "广告屏蔽大师+",  icon: "🚫", desc: { zh: "广告屏蔽大师 Plus+",  en: "Ad blocker Plus+" } },
    ]
  },
  {
    titleKey: "cat_monitor",
    plugins: [
      { pkg: "luci-app-nlbwmon",   hot: true, name: "带宽监控",    icon: "📈", desc: { zh: "网络带宽监视器",       en: "Bandwidth monitor" } },
      { pkg: "luci-app-statistics",           name: "统计信息",    icon: "📊", desc: { zh: "系统运行统计图表",     en: "System statistics" } },
      { pkg: "luci-app-netdata",              name: "Netdata",     icon: "📉", desc: { zh: "实时性能监控",         en: "Real-time performance" } },
      { pkg: "luci-app-speedtest-web",        name: "网速测试",    icon: "🚀", desc: { zh: "在线网速测试",         en: "Network speed test" } },
      { pkg: "luci-app-wrtbwmon",             name: "实时流量监测",icon: "📡", desc: { zh: "实时流量监测",         en: "Real-time traffic monitor" } },
    ]
  },
  {
    titleKey: "cat_traffic",
    plugins: [
      { pkg: "luci-app-turboacc", hot: true, warn: true, name: "Turbo ACC",  icon: "🚀", desc: { zh: "软件流量加速",         en: "Software traffic acceleration" } },
      { pkg: "kmod-tcp-bbr",      hot: true,             name: "BBR",        icon: "🚀", desc: { zh: "TCP BBR 拥塞控制",     en: "TCP BBR congestion control" } },
      { pkg: "luci-app-qos",                             name: "QoS",        icon: "⚖️", desc: { zh: "服务质量流量控制",     en: "Quality of Service" } },
      { pkg: "luci-app-nft-qos",                         name: "QoS Nftables",icon: "⚖️",desc: { zh: "Nftables 版流量控制", en: "Nftables QoS" } },
      { pkg: "luci-app-sqm",                             name: "SQM QoS",    icon: "⚖️", desc: { zh: "智能队列管理 QoS",    en: "Smart Queue Management" } },
      { pkg: "luci-app-ipspeed",                         name: "IP 限速",    icon: "⚖️", desc: { zh: "按 IP 限制网速",      en: "Per-IP speed limit" } },
      { pkg: "luci-app-autospeed",                       name: "定时限速",   icon: "⏰", desc: { zh: "定时自动限速",         en: "Scheduled speed limit" } },
      { pkg: "luci-app-mwan3",                           name: "MWAN3 分流", icon: "🔀", desc: { zh: "多线多拨负载均衡",     en: "Multi-WAN load balance" } },
    ]
  },
  {
    titleKey: "cat_tools",
    plugins: [
      { pkg: "luci-app-ttyd",      hot: true, name: "TTYD 终端",    icon: "💻", desc: { zh: "网页版 SSH 终端",       en: "Web SSH terminal" } },
      { pkg: "luci-app-filebrowser",          name: "FileBrowser",  icon: "📁", desc: { zh: "网页文件管理",          en: "Web file manager" } },
      { pkg: "luci-app-filetransfer",         name: "文件传输",     icon: "📤", desc: { zh: "文件上传下载",          en: "File transfer" } },
      { pkg: "luci-app-diskman",   hot: true, name: "磁盘管理",     icon: "💾", desc: { zh: "硬盘分区挂载管理",      en: "Disk partition manager" } },
      { pkg: "luci-app-partexp",              name: "分区扩容",     icon: "💾", desc: { zh: "根分区在线扩容",        en: "Partition expansion" } },
      { pkg: "luci-app-crontabs",             name: "计划任务",     icon: "⏰", desc: { zh: "定时任务管理",          en: "Scheduled tasks" } },
      { pkg: "luci-app-log",                  name: "系统日志",     icon: "📋", desc: { zh: "查看系统运行日志",      en: "System log viewer" } },
      { pkg: "luci-app-cpu-perf",             name: "CPU 性能",     icon: "⚡", desc: { zh: "CPU 频率调节",          en: "CPU frequency tuning" } },
      { pkg: "luci-app-autoreboot",hot: true, name: "定时重启",     icon: "🔄", desc: { zh: "定时自动重启路由器",    en: "Scheduled reboot" } },
      { pkg: "luci-app-poweroff",             name: "关机",         icon: "⏻",  desc: { zh: "一键关机",              en: "System shutdown" } },
      { pkg: "luci-app-ramfree",              name: "释放内存",     icon: "🧹", desc: { zh: "一键释放系统内存",      en: "Free RAM" } },
      { pkg: "luci-app-commands",             name: "自定义命令",   icon: "⌨️", desc: { zh: "执行自定义 Shell 命令", en: "Custom shell commands" } },
      { pkg: "luci-app-watchcat",             name: "WatchCat",     icon: "🐱", desc: { zh: "网络故障自动重启",      en: "Auto-restart on failure" } },
      { pkg: "luci-app-pushbot",              name: "微信推送",     icon: "📲", desc: { zh: "微信/全能推送通知",     en: "WeChat push notification" } },
      { pkg: "luci-app-lucky",                name: "Lucky",        icon: "🍀", desc: { zh: "综合工具面板",          en: "All-in-one panel" } },
      { pkg: "luci-app-advanced",             name: "高级设置",     icon: "⚙️", desc: { zh: "系统高级配置选项",      en: "Advanced settings" } },
      { pkg: "luci-app-uhttpd",               name: "uHTTPd",       icon: "🌐", desc: { zh: "Web 服务器配置",        en: "uHTTPd web server" } },
      { pkg: "luci-app-acme",                 name: "ACME 证书",    icon: "🔐", desc: { zh: "自动申请 SSL 证书",     en: "ACME SSL certificate" } },
      { pkg: "luci-app-wizard",               name: "网络向导",     icon: "🧙", desc: { zh: "网络配置向导",          en: "Network setup wizard" } },
      { pkg: "luci-app-vlmcsd",               name: "KMS 服务器",   icon: "🔑", desc: { zh: "Windows KMS 激活服务",  en: "KMS activation server" } },
      { pkg: "luci-app-chatgpt-web",          name: "ChatGPT Web",  icon: "🤖", desc: { zh: "ChatGPT 网页客户端",    en: "ChatGPT web client" } },
    ]
  },
  {
    titleKey: "cat_network",
    plugins: [
      { pkg: "luci-app-ddns",      hot: true, name: "DDNS",         icon: "🌐", desc: { zh: "动态域名解析",       en: "Dynamic DNS" } },
      { pkg: "luci-app-aliddns",              name: "阿里 DDNS",    icon: "🌐", desc: { zh: "阿里云动态域名",     en: "Aliyun DDNS" } },
      { pkg: "luci-app-ddns-go",              name: "DDNS-GO",      icon: "🌐", desc: { zh: "多平台 DDNS 客户端", en: "Multi-platform DDNS" } },
      { pkg: "luci-app-tencentddns",          name: "腾讯云 DDNS",  icon: "🌐", desc: { zh: "腾讯云动态域名",     en: "Tencent DDNS" } },
      { pkg: "luci-app-upnp",                 name: "UPnP",         icon: "🔌", desc: { zh: "端口自动映射",       en: "Auto port mapping" } },
      { pkg: "luci-app-zerotier",  hot: true, name: "ZeroTier",     icon: "🔗", desc: { zh: "虚拟局域网组网",     en: "Virtual LAN" } },
      { pkg: "luci-app-easytier",             name: "EasyTier",     icon: "🔗", desc: { zh: "P2P 组网工具",       en: "P2P mesh network" } },
      { pkg: "luci-app-easymesh",             name: "简单MESH",     icon: "🔗", desc: { zh: "简单 MESH 组网",     en: "Simple MESH network" } },
      { pkg: "luci-app-wolplus",              name: "网络唤醒",     icon: "💡", desc: { zh: "Wake-on-LAN 唤醒",  en: "Wake on LAN" } },
      { pkg: "luci-app-socat",                name: "Socat",        icon: "🔌", desc: { zh: "端口转发工具",       en: "Port forwarding" } },
      { pkg: "luci-app-macvlan",              name: "Macvlan",      icon: "🔌", desc: { zh: "Macvlan 网络接口",   en: "Macvlan interface" } },
      { pkg: "luci-app-mentohust",            name: "MentoHUST",    icon: "🔑", desc: { zh: "华为 802.1X 认证",   en: "Huawei 802.1X auth" } },
      { pkg: "luci-app-iptv-helper",          name: "IPTV 帮手",    icon: "📺", desc: { zh: "IPTV 组播代理",      en: "IPTV multicast proxy" } },
      { pkg: "luci-app-udpxy",                name: "udpxy",        icon: "📺", desc: { zh: "组播转 HTTP 代理",   en: "Multicast to HTTP" } },
      { pkg: "luci-app-tinyproxy",            name: "Tinyproxy",    icon: "🔌", desc: { zh: "轻量 HTTP 代理",     en: "Lightweight HTTP proxy" } },
      { pkg: "luci-app-polipo",  warn: true,  name: "Polipo",       icon: "🔌", desc: { zh: "HTTP 缓存代理",      en: "HTTP caching proxy" } },
      { pkg: "luci-app-jk-ac",   warn: true,  name: "集客AC控制器", icon: "📡", desc: { zh: "集客无线AC控制器",   en: "JK AC controller" } },
      { pkg: "luci-app-ahcp",    warn: true,  name: "AHCP 服务器",  icon: "🌐", desc: { zh: "Ad-Hoc 配置协议",    en: "AHCP server" } },
    ]
  },
  {
    titleKey: "cat_vpn",
    plugins: [
      { pkg: "luci-app-wireguard",  hot: true, name: "WireGuard",      icon: "🔒", desc: { zh: "高性能 VPN 隧道",   en: "High-perf VPN tunnel" } },
      { pkg: "luci-app-softethervpn",          name: "SoftEther VPN",  icon: "🔒", desc: { zh: "多协议 VPN 服务",   en: "Multi-protocol VPN" } },
      { pkg: "luci-app-openvpn",               name: "OpenVPN 服务端", icon: "🔒", desc: { zh: "OpenVPN 服务器",    en: "OpenVPN server" } },
      { pkg: "luci-app-openvpn-server",        name: "OpenVPN 客户端", icon: "🔒", desc: { zh: "OpenVPN 客户端",    en: "OpenVPN client" } },
      { pkg: "luci-app-pptp-server",           name: "PPTP VPN",       icon: "🔒", desc: { zh: "PPTP VPN 服务器",   en: "PPTP VPN server" } },
      { pkg: "luci-app-ipsec-server",          name: "IPSec VPN",      icon: "🔒", desc: { zh: "IPSec VPN 服务器",  en: "IPSec VPN server" } },
      { pkg: "luci-app-n2n",                   name: "N2N VPN",        icon: "🔒", desc: { zh: "N2N P2P VPN",       en: "N2N P2P VPN" } },
    ]
  },
  {
    titleKey: "cat_tunnel",
    plugins: [
      { pkg: "luci-app-frpc",       hot: true, name: "FRP 客户端",   icon: "🚇", desc: { zh: "内网穿透客户端",     en: "Intranet tunnel client" } },
      { pkg: "luci-app-frps",                  name: "FRP 服务端",   icon: "🚇", desc: { zh: "内网穿透服务端",     en: "Intranet tunnel server" } },
      { pkg: "luci-app-nps",                   name: "NPS 服务端",   icon: "🚇", desc: { zh: "NPS 内网穿透服务端", en: "NPS tunnel server" } },
      { pkg: "luci-app-npc",                   name: "NPS 客户端",   icon: "🚇", desc: { zh: "NPS 内网穿透客户端", en: "NPS tunnel client" } },
      { pkg: "luci-app-ddnsto",                name: "DDNSTO 远程",  icon: "🌐", desc: { zh: "DDNSTO 远程控制",    en: "DDNSTO remote control" } },
      { pkg: "luci-app-phtunnel",  warn: true, name: "花生壳",       icon: "🥜", desc: { zh: "花生壳内网穿透",     en: "Oray tunnel" } },
      { pkg: "luci-app-pgyvpn",    warn: true, name: "蒲公英组网",   icon: "🌼", desc: { zh: "蒲公英智能组网",     en: "Oray mesh VPN" } },
    ]
  },
  {
    titleKey: "cat_sim",
    plugins: [
      { pkg: "luci-app-sms-tool", hot: true,       name: "SMS Tool",         icon: "📨", desc: { zh: "收发短信管理",           en: "SMS management" } },
      { pkg: "luci-app-3ginfo-lite", hot: true,    name: "3G/4G 信息",       icon: "📶", desc: { zh: "移动网络信号状态",       en: "Mobile signal status" } },
      { pkg: "luci-app-modemband", hot: true,      name: "频段锁定",         icon: "📡", desc: { zh: "锁定 4G/5G 频段",        en: "Lock 4G/5G band" } },
      { pkg: "luci-app-mmconfig",       name: "ModemManager",     icon: "📡", desc: { zh: "调制解调器配置",         en: "Modem configuration" } },
    ]
  },
  {
    titleKey: "cat_theme",
    plugins: [
      { pkg: "luci-theme-argon",        name: "Argon",            icon: "🎨", desc: { zh: "精美主题（默认已含）",   en: "Beautiful theme (default)" } },
      { pkg: "luci-theme-material",     name: "Material",         icon: "🎨", desc: { zh: "Material Design 风格",   en: "Material Design style" } },
      { pkg: "luci-theme-neobird",      name: "NeoBird",          icon: "🎨", desc: { zh: "简洁深色主题",           en: "Clean dark theme" } },
      { pkg: "luci-theme-kucat",        name: "KuCat",            icon: "🎨", desc: { zh: "KuCat 主题",             en: "KuCat theme" } },
      { pkg: "luci-app-argon-config", hot: true,   name: "Argon 主题设置",   icon: "🎨", desc: { zh: "Argon 主题配置面板",     en: "Argon theme settings" } },
      { pkg: "luci-app-design-config",  name: "Design 主题设置",  icon: "🎨", desc: { zh: "Design 主题配置面板",    en: "Design theme settings" } },
    ]
  },
  {
    titleKey: "cat_storage",
    plugins: [
      { pkg: "luci-app-aria2",          name: "Aria2",          icon: "⬇️", desc: { zh: "多协议下载工具",     en: "Multi-protocol downloader" } },
      { pkg: "luci-app-transmission",   name: "Transmission",   icon: "🌊", desc: { zh: "BT 下载客户端",      en: "BT download client" } },
      { pkg: "luci-app-qbittorrent",    name: "qBittorrent",    icon: "🌊", desc: { zh: "BT 下载客户端",      en: "BT download client" } },
      { pkg: "luci-app-amule",          name: "aMule",          icon: "🌊", desc: { zh: "eMule P2P 下载",     en: "eMule P2P download" } },
      { pkg: "luci-app-samba4",         name: "Samba 共享",     icon: "📂", desc: { zh: "Windows 文件共享",   en: "Windows file sharing" } },
      { pkg: "luci-app-vsftpd",         name: "FTP 服务器",     icon: "📂", desc: { zh: "FTP 文件服务器",     en: "FTP server" } },
      { pkg: "luci-app-nfs",            name: "NFS 管理",       icon: "📂", desc: { zh: "NFS 网络文件系统",   en: "NFS management" } },
      { pkg: "luci-app-webdav",         name: "WebDAV",         icon: "📂", desc: { zh: "WebDAV 服务器",      en: "WebDAV server" } },
      { pkg: "luci-app-cifs-mount",     name: "挂载 SMB",       icon: "📂", desc: { zh: "挂载 SMB 网络共享",  en: "Mount SMB share" } },
      { pkg: "luci-app-hd-idle",        name: "硬盘休眠",       icon: "💤", desc: { zh: "硬盘自动休眠省电",   en: "HDD idle spindown" } },
      { pkg: "luci-app-usb-printer",    name: "USB 打印服务器", icon: "🖨️", desc: { zh: "USB 打印机共享",     en: "USB print server" } },
      { pkg: "luci-app-p910nd",         name: "打印服务器(模块)",icon: "🖨️",desc: { zh: "p910nd 打印服务模块",en: "p910nd print server" } },
      { pkg: "luci-app-alist",          name: "AList",          icon: "☁️", desc: { zh: "多网盘文件列表",     en: "Multi-cloud file list" } },
      { pkg: "luci-app-clouddrive2",    name: "CloudDrive2",    icon: "☁️", desc: { zh: "云盘挂载工具",       en: "Cloud drive mount" } },
      { pkg: "luci-app-aliyundrive-webdav", name: "阿里云盘 WebDAV", icon: "☁️", desc: { zh: "阿里云盘 WebDAV 挂载", en: "Aliyun Drive WebDAV" } },
      { pkg: "luci-app-aliyundrive-fuse",   name: "阿里云盘 FUSE",   icon: "☁️", desc: { zh: "阿里云盘 FUSE 挂载",  en: "Aliyun Drive FUSE" } },
      { pkg: "luci-app-kodexplorer",    name: "可道云",         icon: "☁️", desc: { zh: "可道云私有网盘",     en: "KodExplorer cloud" } },
      { pkg: "luci-app-verysync",       name: "微力同步",       icon: "🔄", desc: { zh: "局域网文件同步",     en: "LAN file sync" } },
      { pkg: "luci-app-openlist",       name: "OpenList",       icon: "📋", desc: { zh: "文件列表服务",       en: "File list service" } },
      { pkg: "luci-app-baidupcs-web",   name: "百度网盘",       icon: "☁️", desc: { zh: "百度网盘 Web 客户端",en: "Baidu PCS web client" } },
      { pkg: "luci-app-linkease",       name: "易有云文件管理", icon: "☁️", desc: { zh: "易有云文件管理器",    en: "LinkEase file manager" } },
    ]
  },
  {
    titleKey: "cat_access",
    plugins: [
      { pkg: "luci-app-accesscontrol", hot: true,  name: "上网时间控制",     icon: "⏱️", desc: { zh: "按设备限制上网时间",     en: "Per-device time control" } },
      { pkg: "luci-app-parentalctl",    name: "家长控制",         icon: "👨‍👩‍👧", desc: { zh: "儿童上网内容过滤",       en: "Parental content filter" } },
      { pkg: "luci-app-banip",          name: "BanIP",            icon: "🚷", desc: { zh: "IP 黑名单封锁",          en: "IP blacklist blocking" } },
      { pkg: "luci-app-appfilter",      name: "应用过滤",         icon: "🔍", desc: { zh: "应用层流量过滤",         en: "App traffic filter" } },
      { pkg: "luci-app-arpbind",    name: "IP/MAC 绑定",      icon: "🔗", desc: { zh: "IP 与 MAC 地址绑定",     en: "IP/MAC binding" } },
      { pkg: "luci-app-clamav",         name: "ClamAV",           icon: "🦠", desc: { zh: "开源杀毒软件",           en: "Open-source antivirus" } },
      { pkg: "luci-app-beardropper",    name: "BearDropper",      icon: "🐻", desc: { zh: "暴力破解防护",           en: "Brute-force protection" } },
    ]
  },
  {
    titleKey: "cat_docker",
    plugins: [
      { pkg: "luci-app-dockerman", hot: true, name: "Docker (Dockerman)", icon: "🐳", desc: { zh: "Docker 容器管理（推荐）", en: "Docker manager (recommended)" } },
      { pkg: "docker",                         name: "Docker",             icon: "🐳", desc: { zh: "Docker CE 容器引擎",     en: "Docker CE engine" } },
      { pkg: "luci-app-lxc",                   name: "LXC Containers",    icon: "📦", desc: { zh: "LXC 轻量容器管理",      en: "LXC container manager" } },
    ]
  },
  {
    titleKey: "cat_store",
    plugins: [
      { pkg: "luci-app-store",                 name: "iStore 应用商店",   icon: "🏪", desc: { zh: "易有云 iStore 应用商店", en: "iStore app store" } },
    ]
  },
  {
    titleKey: "cat_game",
    plugins: [
      { pkg: "luci-app-leigod-acc", warn: true,     name: "雷神加速器",       icon: "⚡", desc: { zh: "雷神游戏加速器",         en: "Leigod game accelerator" } },
      { pkg: "luci-app-qiyou-acc", warn: true,      name: "奇游联机宝",       icon: "🎮", desc: { zh: "奇游游戏加速",           en: "Qiyou game accelerator" } },
      { pkg: "luci-app-UUGameAcc",  name: "UU 游戏加速",      icon: "🎮", desc: { zh: "网易 UU 游戏加速器",     en: "NetEase UU accelerator" } },
      { pkg: "luci-app-ps3netsrv",      name: "PS3 NET 服务器",   icon: "🎮", desc: { zh: "PS3 网络游戏服务",       en: "PS3 net server" } },
    ]
  },
  {
    titleKey: "cat_media",
    plugins: [
      { pkg: "luci-app-minidlna",              name: "miniDLNA",        icon: "📺", desc: { zh: "DLNA 媒体服务器",        en: "DLNA media server" } },
      { pkg: "luci-app-airplay2",              name: "AirPlay 2",       icon: "🎵", desc: { zh: "AirPlay 音频接收器",     en: "AirPlay 2 audio receiver" } },
      { pkg: "luci-app-pchifidac",             name: "PCHiFi 数字转盘", icon: "🎵", desc: { zh: "PCHiFi 音频转盘遥控",    en: "PCHiFi DAC remote" } },
      { pkg: "luci-app-unblockmusic",          name: "解锁网易云",      icon: "🎵", desc: { zh: "解锁网易云灰色歌曲",     en: "Unlock NetEase grey songs" } },
      { pkg: "luci-app-xunlei",  warn: true,  name: "迅雷快鸟",        icon: "⬇️", desc: { zh: "迅雷快鸟宽带加速",       en: "Xunlei bandwidth boost" } },
    ]
  },
];

// ============================================================
// 状态
// ============================================================
let selectedDevice  = "ufi003";
let selectedPlugins = new Set();
let isVerified      = false;
let currentLang     = "zh";
let currentTheme    = "light";

// ============================================================
// 工具
// ============================================================
function t(key) { return (I18N[currentLang] || I18N.zh)[key] || key; }

function setStatus(el, type, msg) {
  el.className = `status-msg ${type}`;
  el.innerHTML = msg;
}

function applyI18n() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  // 语言按钮文字
  document.getElementById("btn-lang").textContent = currentLang === "zh" ? "🌐 EN" : "🌐 中文";
  // 重新渲染依赖语言的动态内容
  renderDevices();
  renderPlugins();
  updateBuildSummary();
}

// ============================================================
// 主题
// ============================================================
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("btn-theme").textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("owrt_theme", theme);
}

// ============================================================
// 持久化
// ============================================================
function loadSavedData() {
  const token = localStorage.getItem("owrt_token");
  if (token) document.getElementById("token").value = token;

  const repo = localStorage.getItem("owrt_repo");
  if (repo) document.getElementById("repo").value = repo;

  const device = localStorage.getItem("owrt_device");
  if (device && DEVICES.find(d => d.id === device)) selectedDevice = device;

  const plugins = localStorage.getItem("owrt_plugins");
  if (plugins) { try { selectedPlugins = new Set(JSON.parse(plugins)); } catch(e) {} }

  const lang = localStorage.getItem("owrt_lang");
  if (lang === "en" || lang === "zh") currentLang = lang;

  const theme = localStorage.getItem("owrt_theme");
  if (theme === "light" || theme === "dark") currentTheme = theme;
}

function saveData() {
  if (document.getElementById("remember-token").checked) {
    localStorage.setItem("owrt_token", document.getElementById("token").value.trim());
  } else {
    localStorage.removeItem("owrt_token");
  }
  localStorage.setItem("owrt_repo", document.getElementById("repo").value.trim());
  localStorage.setItem("owrt_device", selectedDevice);
  localStorage.setItem("owrt_plugins", JSON.stringify([...selectedPlugins]));
  localStorage.setItem("owrt_lang", currentLang);
}

// ============================================================
// 渲染设备
// ============================================================
function renderDevices() {
  const container = document.getElementById("device-tree");
  container.innerHTML = "";

  PLATFORMS.forEach(platform => {
    const platformEl = document.createElement("div");
    platformEl.className = "platform-block";
    platformEl.innerHTML = `
      <div class="platform-title">
        <span class="platform-icon">${platform.icon}</span>
        <span class="platform-name">${platform.name}</span>
        <span class="platform-desc">${t(platform.descKey)}</span>
      </div>`;

    platform.series.forEach(series => {
      const seriesEl = document.createElement("div");
      seriesEl.className = "series-block";
      if (platform.series.length > 1) {
        seriesEl.innerHTML = `<div class="series-title">${t(series.nameKey)}</div>`;
      }
      const chipList = document.createElement("div");
      chipList.className = "device-chip-list";

      series.devices.forEach(d => {
        const chip = document.createElement("div");
        chip.className = "device-chip" + (d.id === selectedDevice ? " selected" : "");
        chip.dataset.id = d.id;
        chip.innerHTML = d.recommended
          ? `${d.name}<span class="chip-badge">${t("device_recommended")}</span>`
          : d.name;
        chip.addEventListener("click", () => {
          selectedDevice = d.id;
          document.querySelectorAll(".device-chip").forEach(c => c.classList.remove("selected"));
          chip.classList.add("selected");
          updateBuildSummary();
          saveData();
        });
        chipList.appendChild(chip);
      });

      seriesEl.appendChild(chipList);
      platformEl.appendChild(seriesEl);
    });

    container.appendChild(platformEl);
  });
}

// ============================================================
// 渲染插件
// ============================================================
function renderPlugins() {
  const container = document.getElementById("plugin-categories");
  container.innerHTML = "";

  PLUGIN_CATEGORIES.forEach(cat => {
    const catEl = document.createElement("div");
    catEl.className = "category";
    catEl.innerHTML = `<div class="category-title">${t(cat.titleKey)}</div>`;

    const listEl = document.createElement("div");
    listEl.className = "plugin-list";

    cat.plugins.forEach(p => {
      const tag = document.createElement("div");
      tag.className = "plugin-tag" + (selectedPlugins.has(p.pkg) ? " selected" : "");
      tag.dataset.pkg  = p.pkg;
      tag.dataset.name = p.name.toLowerCase();
      tag.dataset.desc = (p.desc.zh + " " + p.desc.en).toLowerCase();
      const descText = p.desc[currentLang] || p.desc.zh;
      const hotBadge  = p.hot  ? `<span class="badge-hot">${currentLang === "zh" ? "常用" : "Popular"}</span>` : "";
      const warnBadge = p.warn ? `<span class="badge-warn">${currentLang === "zh" ? "可能无法编译" : "May fail"}</span>` : "";
      tag.innerHTML = `
        <span class="plugin-icon">${p.icon}</span>
        <span class="plugin-name">${p.name}</span>${hotBadge}${warnBadge}
        <span class="plugin-desc">${descText}</span>`;
      tag.addEventListener("click", () => togglePlugin(p.pkg, tag));
      listEl.appendChild(tag);
    });

    catEl.appendChild(listEl);
    container.appendChild(catEl);
  });

  updateSelectedSummary();
}

function togglePlugin(pkg, el) {
  if (selectedPlugins.has(pkg)) {
    selectedPlugins.delete(pkg);
    el.classList.remove("selected");
  } else {
    selectedPlugins.add(pkg);
    el.classList.add("selected");
  }
  updateSelectedSummary();
  updateBuildSummary();
  saveData();
}

function getCustomPackages() {
  const raw = document.getElementById("custom-packages").value.trim();
  if (!raw) return [];
  return raw.split(/[\s,，]+/).map(s => s.trim()).filter(Boolean);
}

function updateSelectedSummary() {
  const all = [...selectedPlugins, ...getCustomPackages()];
  const codeEl  = document.getElementById("selected-packages");
  const copyBtn = document.getElementById("btn-copy-pkgs");
  codeEl.textContent = all.length ? all.join(",") : "—";
  copyBtn.style.display = all.length ? "inline-block" : "none";

  // 更新插件区标题计数
  const countEl = document.getElementById("plugin-count");
  if (countEl) countEl.textContent = all.length > 0 ? ` (${all.length})` : "";
}

// ============================================================
// 搜索
// ============================================================
function filterPlugins(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll(".plugin-tag").forEach(tag => {
    const match = !q || tag.dataset.name.includes(q) || tag.dataset.desc.includes(q) || tag.dataset.pkg.includes(q);
    tag.classList.toggle("hidden", !match);
  });
  document.querySelectorAll(".category").forEach(cat => {
    cat.style.display = cat.querySelectorAll(".plugin-tag:not(.hidden)").length ? "" : "none";
  });
}

// ============================================================
// Build Summary
// ============================================================
function updateBuildSummary() {
  const allPkgs  = [...selectedPlugins, ...getCustomPackages()];
  const device   = DEVICES.find(d => d.id === selectedDevice);
  const ip       = document.getElementById("sys-ip").value.trim();
  const hostname = document.getElementById("sys-hostname").value.trim();

  document.getElementById("build-summary").innerHTML = `
    <div class="row"><span class="label">${t("sum_device")}</span><span class="value">${device ? device.name : selectedDevice}</span></div>
    <div class="row"><span class="label">${t("sum_pkgs")}</span><span class="value ${allPkgs.length ? "" : "empty"}">${allPkgs.length ? allPkgs.join(", ") : t("sum_no_pkg")}</span></div>
    <div class="row"><span class="label">${t("sum_ip")}</span><span class="value ${ip ? "" : "empty"}">${ip || t("sum_ip_default")}</span></div>
    <div class="row"><span class="label">${t("sum_hostname")}</span><span class="value ${hostname ? "" : "empty"}">${hostname || t("sum_hostname_default")}</span></div>`;

  document.getElementById("btn-build").disabled = !isVerified;
}

// ============================================================
// 事件绑定
// ============================================================
function bindEvents() {
  // 主题切换
  document.getElementById("btn-theme").addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  // 语言切换
  document.getElementById("btn-lang").addEventListener("click", () => {
    currentLang = currentLang === "zh" ? "en" : "zh";
    localStorage.setItem("owrt_lang", currentLang);
    applyI18n();
  });

  // 新手引导折叠
  const guideToggle = document.getElementById("guide-toggle");
  const guideBody   = document.getElementById("guide-body");
  const guideArrow  = document.getElementById("guide-arrow");
  if (guideToggle) {
    guideToggle.addEventListener("click", () => {
      guideBody.classList.toggle("open");
      guideArrow.classList.toggle("open");
    });
  }

  // Token 显示/隐藏
  document.getElementById("btn-toggle-token").addEventListener("click", () => {
    const input = document.getElementById("token");
    const btn   = document.getElementById("btn-toggle-token");
    const isHidden = input.type === "password";
    input.type   = isHidden ? "text" : "password";
    btn.textContent = isHidden ? t("hide") : t("show");
  });

  // 验证
  document.getElementById("btn-verify").addEventListener("click", verifyAuth);

  // 搜索
  document.getElementById("plugin-search").addEventListener("input", e => filterPlugins(e.target.value));

  // 清空
  document.getElementById("btn-clear-all").addEventListener("click", () => {
    selectedPlugins.clear();
    document.querySelectorAll(".plugin-tag.selected").forEach(t => t.classList.remove("selected"));
    updateSelectedSummary();
    updateBuildSummary();
    saveData();
  });

  // 复制
  document.getElementById("btn-copy-pkgs").addEventListener("click", () => {
    const text = [...selectedPlugins, ...getCustomPackages()].join(",");
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById("btn-copy-pkgs");
      btn.textContent = t("copied");
      setTimeout(() => btn.textContent = t("copy"), 1500);
    });
  });

  // 自定义包名
  document.getElementById("custom-packages").addEventListener("input", () => {
    updateSelectedSummary();
    updateBuildSummary();
  });

  // 系统设置
  ["sys-ip", "sys-hostname"].forEach(id => {
    document.getElementById(id).addEventListener("input", updateBuildSummary);
  });

  // 编译
  document.getElementById("btn-build").addEventListener("click", triggerBuild);
}

// ============================================================
// GitHub API 验证
// ============================================================
async function verifyAuth() {
  const repo    = document.getElementById("repo").value.trim();
  const token   = document.getElementById("token").value.trim();
  const statusEl = document.getElementById("auth-status");

  if (!repo || !token) { setStatus(statusEl, "error", t("err_fill")); return; }
  if (!repo.includes("/")) { setStatus(statusEl, "error", t("err_repo_fmt")); return; }

  setStatus(statusEl, "loading", t("verifying"));

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { "Authorization": `token ${token}`, "Accept": "application/vnd.github.v3+json" }
    });
    if (res.status === 200) {
      const data = await res.json();
      isVerified = true;
      saveData();
      setStatus(statusEl, "success", `${t("ok_verified")}${data.full_name}（${data.private ? t("private") : t("public")}）`);
      updateBuildSummary();
    } else if (res.status === 401) { setStatus(statusEl, "error", t("err_token")); }
    else if (res.status === 404)   { setStatus(statusEl, "error", t("err_repo")); }
    else { setStatus(statusEl, "error", `${t("err_http")}${res.status}）`); }
  } catch(e) { setStatus(statusEl, "error", t("err_net")); }
}

// ============================================================
// 触发编译
// ============================================================
async function triggerBuild() {
  const repo     = document.getElementById("repo").value.trim();
  const token    = document.getElementById("token").value.trim();
  const statusEl = document.getElementById("build-status");
  const buildBtn = document.getElementById("btn-build");

  const pkgs     = [...selectedPlugins, ...getCustomPackages()].join(",");
  const ip       = document.getElementById("sys-ip").value.trim();
  const hostname = document.getElementById("sys-hostname").value.trim();
  const upstream = document.getElementById("sys-upstream").value;
  const hash     = document.getElementById("sys-hash").value.trim();

  const inputs = { profile: selectedDevice, upstream, extra_packages: pkgs, custom_hash: hash, ssh: "false" };
  if (ip)       inputs.extra_packages += (inputs.extra_packages ? "," : "") + `__ip__${ip}`;
  if (hostname) inputs.extra_packages += (inputs.extra_packages ? "," : "") + `__hostname__${hostname}`;

  setStatus(statusEl, "loading", t("building"));
  buildBtn.disabled = true;

  try {
    const wfRes = await fetch(`https://api.github.com/repos/${repo}/actions/workflows`, {
      headers: { "Authorization": `token ${token}`, "Accept": "application/vnd.github.v3+json" }
    });
    if (!wfRes.ok) throw new Error(`${t("err_wf_list")}${wfRes.status}）`);

    const wfData   = await wfRes.json();
    const workflow = wfData.workflows.find(w => w.path.includes("Build_高通410 web"));
    if (!workflow) throw new Error(t("err_no_wf"));

    const dispatch = async (ref) => fetch(
      `https://api.github.com/repos/${repo}/actions/workflows/${workflow.id}/dispatches`,
      { method: "POST",
        headers: { "Authorization": `token ${token}`, "Accept": "application/vnd.github.v3+json", "Content-Type": "application/json" },
        body: JSON.stringify({ ref, inputs }) }
    );

    let res = await dispatch("main");
    if (res.status === 422) res = await dispatch("master");

    if (res.status === 204) {
      const url = `https://github.com/${repo}/actions`;
      setStatus(statusEl, "success", t("ok_built").replace("{url}", url));
      // 触发成功后恢复按钮，允许用户再次触发
      setTimeout(() => { buildBtn.disabled = false; }, 3000);
    } else {
      throw new Error(`${t("err_trigger")}${res.status}）`);
    }
  } catch(e) {
    setStatus(statusEl, "error", `❌ ${e.message}`);
    buildBtn.disabled = false;
  }
}

// ============================================================
// 初始化
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  loadSavedData();
  applyTheme(currentTheme);
  applyI18n();
  bindEvents();
});
