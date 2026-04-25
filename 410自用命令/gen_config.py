#!/usr/bin/env python3
"""
用法: python gen_config.py <源设备> <目标设备>
示例: python gen_config.py ufi003 mf32

支持的设备名: ufi001c, ufi001b, ufi103s, qrzl903, w001, ufi003, uz801, mf32, mf601, wf2, jz02v10, sp970v11, sp970v10
"""

import sys
import shutil
from pathlib import Path

DEVICES = [
    "ufi001c", "ufi001b", "ufi103s", "qrzl903", "w001",
    "ufi003", "uz801", "mf32", "mf601", "wf2", "jz02v10", "sp970v11", "sp970v10"
]

def gen_config(src: str, dst: str):
    src_file = Path(f"config/{src}.config")
    dst_file = Path(f"config/{dst}.config")

    if not src_file.exists():
        print(f"错误: 找不到源文件 {src_file}")
        sys.exit(1)
    if src not in DEVICES or dst not in DEVICES:
        print(f"错误: 设备名不在支持列表中\n支持: {', '.join(DEVICES)}")
        sys.exit(1)

    content = src_file.read_text(encoding="utf-8")

    # 1. TARGET DEVICE 选择块 - 把 src=y 改成注释，把 dst 的注释改成 =y
    content = content.replace(
        f"CONFIG_TARGET_msm89xx_msm8916_DEVICE_openstick-{src}=y",
        f"# CONFIG_TARGET_msm89xx_msm8916_DEVICE_openstick-{src} is not set"
    )
    content = content.replace(
        f"# CONFIG_TARGET_msm89xx_msm8916_DEVICE_openstick-{dst} is not set",
        f"CONFIG_TARGET_msm89xx_msm8916_DEVICE_openstick-{dst}=y"
    )

    # 2. TARGET_PROFILE
    content = content.replace(
        f'CONFIG_TARGET_PROFILE="DEVICE_openstick-{src}"',
        f'CONFIG_TARGET_PROFILE="DEVICE_openstick-{dst}"'
    )

    # 3. DEFAULT 固件包 (3个)
    for pkg_suffix in ["modem-openstick-{}-firmware", "openstick-{}-wcnss-firmware", "wcnss-openstick-{}-nv"]:
        src_pkg = f"qcom-msm8916-{pkg_suffix.format(src)}"
        dst_pkg = f"qcom-msm8916-{pkg_suffix.format(dst)}"
        content = content.replace(
            f"CONFIG_DEFAULT_{src_pkg}=y",
            f"# CONFIG_DEFAULT_{src_pkg} is not set"
        )
        content = content.replace(
            f"# CONFIG_DEFAULT_{dst_pkg} is not set",
            f"CONFIG_DEFAULT_{dst_pkg}=y"
        )

    # 4. PACKAGE 固件包 (3个)
    for pkg_suffix in ["modem-openstick-{}-firmware", "openstick-{}-wcnss-firmware", "wcnss-openstick-{}-nv"]:
        src_pkg = f"qcom-msm8916-{pkg_suffix.format(src)}"
        dst_pkg = f"qcom-msm8916-{pkg_suffix.format(dst)}"
        content = content.replace(
            f"CONFIG_PACKAGE_{src_pkg}=y",
            f"# CONFIG_PACKAGE_{src_pkg} is not set"
        )
        content = content.replace(
            f"# CONFIG_PACKAGE_{dst_pkg} is not set",
            f"CONFIG_PACKAGE_{dst_pkg}=y"
        )

    dst_file.write_text(content, encoding="utf-8")
    print(f"完成: {dst_file} 已生成 (基于 {src_file})")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    gen_config(sys.argv[1], sys.argv[2])
