<template>
    <div id="M1techspec">
        <h1>Tech Specs</h1>
        <table class="tab">
            <thead>
                <tr>
                    <th>Hachi Infinite M1</th>
                    <th>Hachi Infinite M1 Pro</th>
                </tr>
            </thead>
            <tbody>
                <tr><th colspan="2">Size and Weight</th></tr>
                <tr><td class="tab_img1 line" colspan="2"><img src="@/assets/images/hachiinfinite/tech-img.png" alt="Hachi Infinite M1 Pro"/></td></tr>
                
                <tr><th colspan="2">System Parameters</th></tr>
                <tr><td colspan="2">CPU: Qualcomm Snapdragon SDA670</td></tr>
                <tr>
                    <td>RAM: 4GB</td>
                    <td>RAM: 6GB</td>
                </tr>
                <tr>
                    <td class="line">Built-in storage: 64GB eMMC</td>
                    <td class="line">Built-in storage: 128GB eMMC</td>
                </tr>
                
                <tr><th colspan="2">System Functions</th></tr>
                <tr><td colspan="2">OS: Infinite OS</td></tr>
                <tr><td colspan="2">Android system: Android 9.0</td></tr>
                <tr><td colspan="2">Multi-scr interaction: Airplay/DLNA/Miracast/Hachi Cast</td></tr>
                <tr><td colspan="2">Wi-Fi:2.4G/5GHz dual frequency802.11 a/b/g/n/ac 2 x 2 Dual antenna, dual transmission and reception</td></tr>
                <tr><td colspan="2">Bluetooth: BT 5.0 and above/BLE independent antenna</td></tr>
                <tr>
                    <td class="line">Positioning system : None</td>
                    <td class="line">Positioning system : GPS</td>
                </tr>
                
                <tr><th colspan="2">Projection Parameters</th></tr>
                <tr><td colspan="2">Projection ratio: 0.39:1</td></tr>
                <tr><td colspan="2">Off-axis: 100% and above</td></tr>
                <tr><td colspan="2">Picture size: 23~100 inches</td></tr>
                <tr><td colspan="2" class="line">Recommended size: 23~40 inches</td></tr>
                <tr><th colspan="2">Keystone Correction</th></tr>
                <tr><td colspan="2" class="line">Support automatic vertical keystone correction</td></tr>
                
                <tr><th colspan="2">Projection Mode</th></tr>
                <tr><td colspan="2" class="line">Desk projection, support horizontal and vertical placement</td></tr>
                
                <tr><th colspan="2">Focus Mode</th></tr>
                <tr><td colspan="2" class="line">Auto focus and allow manual adjustment by remote control</td></tr>
                
                <tr><th colspan="2">Optical Parameters</th></tr>
                <tr>
                    <td>Center brightness: 500ANSI</td>
                    <td>Center brightness: 600ANSI</td>
                </tr>
                <tr><td colspan="2">Standard resolution: 1280 x 720</td></tr>
                <tr><td colspan="2">Compatible resolution: 1080p/2K/4K</td></tr>
                <tr><td colspan="2">Display technique: DLP</td></tr>
                <tr><td colspan="2">Lens: High transmittance coated lens</td></tr>
                <tr><td colspan="2">Brightness Uniformity: JBMA > 80%</td></tr>
                <tr><td colspan="2">Color gamut: >=100%NTSC</td></tr>
                <tr><td colspan="2" class="line">Center contrast: 600:1</td></tr>
                
                <tr><th colspan="2">Audio</th></tr>
                <tr><td colspan="2">Channel: 2.0 channels</td></tr>
                <tr><td colspan="2">Speaker: Full frequency 36mm x 2</td></tr>
                <tr><td colspan="2" class="line">Power: 5W x 2</td></tr>
                
                <tr><th colspan="2">Port</th></tr>
                <tr><td colspan="2">Video input: HDMI 1.4 Input x 1</td></tr>
                <tr><td colspan="2">Video output: DP 1.4 x 1 (data port expansion)</td></tr>
                <tr><td colspan="2">Audio output: 3.5mm headphone jack x 1</td></tr>
                <tr><td colspan="2">Data port: USB Type-C x 1</td></tr>
                <tr><td colspan="2" class="line">Power port: DC-in x 1 (Type-C)</td></tr>
                
                <tr><th colspan="2">Indicators</th></tr>
                <tr><td colspan="2" class="line">Status indication:Different indicators are used to indicate various statuses like power on/off, lower battery, charging</td></tr>
                
                <tr><th colspan="2">Sensor</th></tr>
                <tr><td colspan="2">Position sensing: Acceleration sensor, gyroscope</td></tr>
                <tr><td colspan="2">Light sensing: Light sensor</td></tr>
                <tr><td colspan="2" class="line">Proximity sensing: Proximity sensor</td></tr>
                
                <tr><th colspan="2">Control</th></tr>
                <tr><td colspan="2">Key: Power key, volume up and down</td></tr>
                <tr><td colspan="2">Remote control: Home key, menu key, back key, direction key, volume up / down key, power key</td></tr>
                <tr><td colspan="2" class="line">Interactive:The projection surface is available for touch operation. Support 10 points multi touch and gestures</td></tr>
                
                <tr><th colspan="2">Electrical Specification</th></tr>
                <tr><td colspan="2">Noise: < 30db</td></tr>
                <tr><td colspan="2">Power consumption: 30 ~ 56W</td></tr>
                <tr><td colspan="2">Built-in battery: 11.1v 5000mAh</td></tr>
                <tr><td colspan="2" class="line">Power supply: AC100-240V, 50/60Hz</td></tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss" scoped>
*{margin:0;padding:0;}
#M1techspec{
    width:100%;
    padding:30px 14px 25px 14px;
    box-sizing:border-box;
    background:#2A2929;
    h1 {
        color:#fff;
        font-size:28px;
    }
}
table {
    border-spacing: 0;
}
.tab {
    width:100%;
    margin-top:30px;
    box-sizing:border-box;
    color:#fff;
    thead {
        table-layout:fixed;
        th {
            border-top:1px solid #979797;
            border-bottom:1px solid #979797;
            padding:25px 0 20px 0px;
            font-size:15px;
            width:50%;
        }
        th:last-child {
            text-align:right;
        }
    }
    tbody {
        text-align:left;
        th {
            font-size:14px;
            font-Weight:normal;
            padding-top:18px;
        }
        .tab_img1 img{
            width:100%;
        }
        td {
            padding-top:16px;
            font-size:12px;
            line-height:20px;
        }
        tr td:nth-child(2){
            text-align:right;
        }
        .line {
            padding-bottom:20px;
            border-bottom:1px solid #979797;
        }
    }
}
</style>
