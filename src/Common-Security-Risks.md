# 常见安全风险

根据《2021年开源软件供应链安全风险研究报告》，2020年发现的最主要的缺陷类型为：CWE-79，占新增开源漏洞的14%左右。

| CWE编号 | 中文名称                                              | 个数 |
| ------- | ----------------------------------------------------- | ---- |
| CWE-79  | 在 Web 页面生成时对输入的转义处理不恰当（跨站脚本）   | 824  |
| CWE-506 | 内嵌的恶意代码                                        | 726  |
| CWE-400 | 未加控制的资源消耗（资源穷尽）                        | 510  |
| CWE-200 | 信息暴露                                              | 305  |
| CWE-20  | 输入验证不恰当                                        | 212  |
| CWE-94  | 对生成代码的控制不恰当（代码注入）                    | 201  |
| CWE-119 | 内存缓冲区边界内操作的限制不恰当                      | 142  |
| CWE-125 | 跨界内存读                                            | 134  |
| CWE-78  | OS 命令中使用的特殊元素转义处理不恰当（ OS 命令注入） | 124  |
| CWE-325 | 缺少必要的密码学步骤                                  | 117  |

---

## 开源组件生态安全风险分析

* 开源组件生态中的漏洞数呈上涨趋势， 2020 年环比增长40%
    * 根据调查结果，近 6 年开源组件生态中漏洞数逐年递增。其中，2020 年新增漏洞数为 3426，环比去年增长 40%； 2017 年增长速度最快，环比增长 49%；近 3 年增长速度呈上升趋势， 2020 年新增漏洞数是 2015 年的 4.48 倍。
* 近 6 年中 Maven 仓库漏洞数量最多
    * 漏洞数量 为 3533 个； Go 仓库漏洞数量最少，漏洞数量为 348 个；平均每个仓库漏洞数量为 1413 个。
* 2020 年，含高危以上漏洞占比最多仓库是 Rubygems
    * 超八成组件含高危以上漏洞占比均超过 40%。 2020 年,Rubygems 仓库含高危以上漏洞占比最多，占 Rubygems 仓库新增漏洞的 96%； Go 仓库含高危以上漏洞占比最少，占 2020 年 Go 仓库新增漏洞的 39%。
* 平均每版本漏洞最多的 TOP 25 组件约五成来自 Composer 仓库
    * 平均版本漏洞最多的 TOP25 中， Composer 仓库的组件数占比最多，共计 12 个，占比约 5 成左右； PyPI 仓库的组件数排名第二，共计 7 个；平均版本漏洞数最多的组件来自 Maven 仓库，漏洞数量为 47 个。

---

## 组件漏洞依赖层级传播范围分析

* 一级传播影响范围扩大 125 倍，二级传播影响范围扩大 173 倍
* npm 仓库中的组件经 2 轮传播，影响组件数量最多
	* npm 仓库原始样本中共有 1,962 个含有漏洞的组件，经过一级传播共波及 459,876 个组件,漏洞的影响范围扩大了 234 倍；二级传播共波及 601,574 个组件，范围比最初 1,962 个组件扩大了 307 倍。
* 传播影响范围最小的仓库是 Maven
	* Maven 仓库原始含漏洞组件数量为 2,289 个，经过 2 次传播， 6 组仓库中受漏洞影响范围最小是 Maven 仓库。经过一级传播共波及 94,724 个组件,漏洞的影响范围扩大了 41 倍；二级传播共波及 145,827 个组件，范围比最初 2,289 个组件扩大了 64 倍。

从整体上看，开源组件生态中漏洞影响范围远超预期，组件间的依赖层级关系会导致组件之间漏洞存在传播风险。因此，要保证软件的安全风险控制，应通过自动化的手段识别软件工程中的组件成分，梳理组件间的依赖关系；在已知成分清单基础上对组件漏洞风险实施管控；同时，还要对已知成分进行动态监控，建立组件生态的漏洞威胁警报，在动态变化中将安全漏洞风险降到最低。	

---

## 大型开源项目漏洞总数 TOP20

| 序号 | 大型开源项目               | 主页地址                                                    | 历史漏洞总数 |
| ---- | -------------------------- | ----------------------------------------------------------- | ------------ |
| 1    | Linux  Kernel              | https://www.kernel.org/                                     | 4653         |
| 2    | Chromium(Google  Chrome)   | http://www.chromium.org/                                    | 2695         |
| 3    | Mozilla  Firefox           | https://www.mozilla.org/en-US/firefox/                      | 2241         |
| 4    | MySQL                      | https://dev.mysql.com/                                      | 1171         |
| 5    | Thunderbird                | https://www.thunderbird.net/zh-CN/                          | 1119         |
| 6    | Adobe  Flash Player plugin | https://www.adobe.com/products/flashplayer/end-of-life.html | 1087         |
| 7    | Firefox  ESR               | https://www.mozilla.org/en-US/firefox/enterprise/           | 863          |
| 8    | SeaMonkey                  | https://www.seamonkey-project.org/                          | 706          |
| 9    | Drupal(core)               | https://www.drupal.org/                                     | 699          |
| 10   | PHP                        | https://www.php.net/                                        | 678          |
| 11   | ImageMagick                | https://imagemagick.org/index.php                           | 624          |
| 12   | GitLab                     | https://about.gitlab.com/                                   | 623          |
| 13   | Wireshark                  | https://www.wireshark.org/                                  | 623          |
| 14   | WebKitGTK                  | http://webkitgtk.org/                                       | 591          |
| 15   | WordPress                  | https://wordpress.org/                                      | 575          |
| 16   | OpenJDK                    | https://openjdk.java.net/                                   | 518          |
| 17   | Moodle                     | https://moodle.org/                                         | 442          |
| 18   | Xen  Project (Hypervisor)  | https://xenproject.org/                                     | 411          |
| 19   | FFmpeg                     | https://ffmpeg.org/                                         | 392          |
| 20   | QEMU                       | https://www.qemu.org/                                       | 384          |

---

## 大型开源项目漏洞年度增长 TOP20

| 序号 | 大型开源项目                                        | 主页地址                                          | 2021年漏洞增量 |
| ---- | --------------------------------------------------- | ------------------------------------------------- | -------------- |
| 1    | Linux Kernel                                        | https://www.kernel.org/                           | 419            |
| 2    | Chromium (Google Chrome)                            | http://www.chromium.org/                          | 346            |
| 3    | TensorFlow                                          | https://www.tensorflow.org/                       | 201            |
| 4    | MySQL                                               | https://dev.mysql.com/                            | 191            |
| 5    | GitLab                                              | https://about.gitlab.com/                         | 158            |
| 6    | Mozilla Firefox                                     | https://www.mozilla.org/en-US/firefox/            | 123            |
| 7    | gpac                                                | https://gpac.wp.imt.fr/                           | 116            |
| 8    | Electron - Cross-platform desktop application shell | https://www.electronjs.org/                       | 83             |
| 9    | Thunderbird                                         | https://www.thunderbird.net/zh-CN/                | 79             |
| 10   | FFmpeg                                              | https://ffmpeg.org/                               | 66             |
| 11   | Firefox ESR                                         | https://www.mozilla.org/en-US/firefox/enterprise/ | 62             |
| 12   | WebKitGTK                                           | http://webkitgtk.org/                             | 60             |
| 13   | MediaWiki                                           | https://www.mediawiki.org/wiki/MediaWiki          | 50             |
| 14   | Oracle VM VirtualBox                                | https://www.virtualbox.org/                       | 49             |
| 15   | QEMU                                                | https://www.qemu.org/                             | 41             |
| 16   | Magento                                             | https://business.adobe.com/                       | 39             |
| 17   | Nextcloud                                           | https://nextcloud.com/                            | 36             |
| 18   | Xen Project (Hypervisor)                            | https://xenproject.org/                           | 34             |
| 19   | libredwg                                            | https://www.gnu.org/software/                     | 33             |
| 20   | SWFTools                                            | http://www.swftools.org/                          | 32             |

---

## 包生态系统漏洞增量

| 序号 | 开源软件                          | 所属包生态系统 | 2021年漏洞增量 |
| ---- | --------------------------------- | -------------- | -------------- |
| 1    | FFmpeg-iOS                        | Swift          | 67             |
| 2    | Magento Core                      | Packagist      | 23             |
| 3    | Go programming language           | Godoc          | 20             |
| 4    | Python Pillow                     | Pypi           | 20             |
| 5    | Vaadin                            | Maven          | 19             |
| 6    | Quarkus                           | Maven          | 19             |
| 7    | keycloak                          | Maven          | 16             |
| 8    | TYPO3 CMS                         | Packagist      | 16             |
| 9    | salt                              | Pypi、Conda    | 14             |
| 10   | jackson-databind                  | Maven          | 13             |
| 11   | OpenEXR                           | Conan          | 13             |
| 12   | Firefly III                       | Packagist      | 12             |
| 13   | dubbo                             | Maven          | 12             |
| 14   | Synapse homeserver for Matrix.org | Pypi           | 12             |
| 15   | Elasticsearch                     | Maven          | 12             |
| 16   | Data Mapper for Jackson           | Maven          | 12             |
| 17   | jackson-mapper-asl                | Maven          | 12             |
| 18   | Apache Solr                       | Maven          | 11             |
| 19   | Plone                             | Pypi           | 11             |
| 20   | WebP                              | Swift          | 11             |

---

## 七成项目不活跃，具体分布情况

| 序号 | 包生态系统 | 项目总数 | 不活跃项目数 | 不活跃项目比例 |
| ---- | ---------- | -------- | ------------ | -------------- |
| 1    | Maven      | 542743   | 352390       | 64.9%          |
| 2    | NPM        | 1892984  | 1318868      | 69.7%          |
| 3    | Packagist  | 340541   | 240325       | 70.6%          |
| 4    | Pypi       | 352973   | 217348       | 61.6%          |
| 5    | Godoc      | 328261   | 222079       | 67.7%          |
| 6    | Nuget      | 375614   | 255619       | 68.1%          |
| 7    | Rubygems   | 168436   | 150912       | 89.6%          |
| 8    | Swift      | 82999    | 70621        | 85.1%          |

---

## 主流开源生态关键基础开源软件TOP50

| 排名 | 开源软件                                    | 所属包生态系统 | 直接依赖数 |
| ---- | ------------------------------------------- | -------------- | ---------- |
| 1    | junit:junit                                 | Maven          | 95614      |
| 2    | rake                                        | Rubygems       | 78524      |
| 3    | bundler                                     | Rubygems       | 68683      |
| 4    | org.scala-lang:scala-library                | Maven          | 68469      |
| 5    | rspec                                       | Rubygems       | 58262      |
| 6    | org.slf4j:slf4j-api                         | Maven          | 49376      |
| 7    | Newtonsoft.Json                             | Nuget          | 48964      |
| 8    | tslib                                       | NPM            | 42259      |
| 9    | chalk                                       | NPM            | 34576      |
| 10   | commander                                   | NPM            | 34494      |
| 11   | lodash                                      | NPM            | 33964      |
| 12   | requests                                    | Pypi           | 32640      |
| 13   | numpy                                       | Pypi           | 32498      |
| 14   | illuminate/support                          | Packagist      | 29657      |
| 15   | guzzlehttp/guzzle                           | Packagist      | 26706      |
| 16   | com.google.guava:guava                      | Maven          | 26094      |
| 17   | express                                     | NPM            | 24863      |
| 18   | request                                     | NPM            | 24479      |
| 19   | ch.qos.logback:logback-classic              | Maven          | 23898      |
| 20   | org.mockito:mockito-core                    | Maven          | 22417      |
| 21   | inquirer                                    | NPM            | 21485      |
| 22   | react                                       | NPM            | 20391      |
| 23   | pandas                                      | Pypi           | 20223      |
| 24   | axios                                       | NPM            | 20146      |
| 25   | commons-io:commons-io                       | Maven          | 19481      |
| 26   | com.fasterxml.jackson.core:jackson-databind | Maven          | 19229      |
| 27   | org.apache.commons:commons-lang3            | Maven          | 19084      |
| 28   | fs-extra                                    | NPM            | 18713      |
| 29   | pytest                                      | Pypi           | 17708      |
| 30   | org.clojure:clojure                         | Maven          | 17304      |
| 31   | pry                                         | Rubygems       | 14197      |
| 32   | matplotlib                                  | Pypi           | 14015      |
| 33   | log4j:log4j                                 | Maven          | 13749      |
| 34   | org.projectlombok:lombok                    | Maven          | 13735      |
| 35   | laravel/framework                           | Packagist      | 13472      |
| 36   | scipy                                       | Pypi           | 13459      |
| 37   | org.jetbrains.kotlin:kotlin-stdlib-common   | Maven          | 13386      |
| 38   | org.jetbrains.kotlin:kotlin-stdlib-jdk8     | Maven          | 13349      |
| 39   | org.slf4j:slf4j-log4j12                     | Maven          | 13294      |
| 40   | yiisoft/yii2                                | Packagist      | 13094      |
| 41   | typescript                                  | NPM            | 12921      |
| 42   | rails                                       | Rubygems       | 12805      |
| 43   | activesupport                               | Rubygems       | 12791      |
| 44   | minitest                                    | Rubygems       | 12624      |
| 45   | react-dom                                   | NPM            | 12584      |
| 46   | simplecov                                   | Rubygems       | 12520      |
| 47   | moment                                      | NPM            | 12460      |
| 48   | org.mockito:mockito-all                     | Maven          | 12049      |
| 49   | com.google.code.gson:gson                   | Maven          | 11821      |
| 50   | org.assertj:assertj-core                    | Maven          | 11773      |

---

## 影响最广的开源软件漏洞存在于超3成的软件项目中

| 漏洞名称                                 | CVE编号          | 影响项目数量 | 影响度 |
| ---------------------------------------- | ---------------- | ------------ | ------ |
| Spring Framework远程代码执行漏洞         | CVE-2022-22965   | 1063         | 31.7%  |
| Vmware Spring Framework安全漏洞          | CVE-2022-22950   | 1009         | 30.1%  |
| Vmware Spring Framework 安全特征问题漏洞 | CVE-2022-22968   | 1009         | 30.1%  |
| Vmware Spring Framework 代码问题漏洞     | CVE-2016-1000027 | 1009         | 30.1%  |
| FasterXML jackson-databind缓冲区错误漏洞 | CVE-2020-36518   | 946          | 28.2%  |
| Apache Commons IO路径遍历漏洞            | CVE-2021-29425   | 893          | 26.6%  |
| Google Guava访问控制错误漏洞             | CVE-2020-8908    | 878          | 26.2%  |
| Apache Log4j 信任管理问题漏洞            | CVE-2020-9488    | 859          | 25.6%  |
| jQuery 跨站脚本漏洞                      | CVE-2020-11022   | 819          | 24.4%  |
| jQuery 跨站脚本漏洞                      | CVE-2020-11023   | 819          | 24.4%  |

---

## 最容易利用的漏洞 TOP10

| 容易利用的漏洞名称                       | CVE编号          | 影响项目数量 | 影响度 |
| ---------------------------------------- | ---------------- | ------------ | ------ |
| Spring  Framework 远程代码执行漏洞       | CVE-2022-22965   | 1063         | 31.7%  |
| Vmware  Spring Framework代码问题漏洞     | CVE-2016-1000027 | 1009         | 30.1%  |
| jQuery 跨站脚本漏洞                      | CVE-2020-11022   | 819          | 24.4%  |
| jQuery 跨站脚本漏洞                      | CVE-2020-11023   | 819          | 24.4%  |
| Apache  HttpClient 安全漏洞              | CVE-2020-13956   | 796          | 23.7%  |
| OpenSSL 缓冲区错误漏洞                   | CVE-2021-3711    | 774          | 23.1%  |
| jQuery 跨站脚本漏洞                      | CVE-2019-11358   | 765          | 22.8%  |
| FasterXML  jackson-databind 代码问题漏洞 | CVE-2020-8840    | 763          | 22.7%  |
| jQuery 跨站脚本漏洞                      | CVE-2015-9251    | 689          | 20.5%  |
| Apache Log4j  代码问题漏洞               | CVE-2021-44228   | 666          | 19.9%  |

---

## 老旧版本依然使用

| 开源软件名称                | 版本号  | 版本发布日期 | 使用它的项目数量 |
| --------------------------- | ------- | ------------ | ---------------- |
| JDOM                        | 1.0-FCS | 2002.05.15   | 28               |
| Apache Xalan                | 2.5.D1  | 2003.03.03   | 1                |
| XML Pull Parsing API        | 1.1.3.1 | 2003.06.17   | 228              |
| JUnit                       | 3.8.1   | 2004.03.05   | 100              |
| Log4j                       | 1.2.8   | 2004.03.05   | 52               |
| SSLExt                      | 1.2-0   | 2004.10.04   | 26               |
| jaxen                       | 1.0-FCS | 2005.04.27   | 13               |
| Mockobjects  Core           | 0.09    | 2005.04.27   | 3                |
| Mockobjects  Jdk1 4 J2ee1 3 | 0.09    | 2005.04.27   | 3                |
| JLine                       | 0.9.1   | 2005.05.18   | 3                |

---

## 开源软件多版本使用混乱

| 开源软件名称                  | 被使用的版本数量 |
| ----------------------------- | ---------------- |
| Spring Data                   | 235              |
| Spring Framework              | 226              |
| Apache Tomcat                 | 206              |
| @types/node                   | 186              |
| jackson-databind              | 170              |
| electron-to-chromium          | 168              |
| Hibernate  ORM                | 162              |
| Jetty                         | 158              |
| Spring  TestContext Framework | 155              |
| Spring Boot                   | 145              |