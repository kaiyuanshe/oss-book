# 开源法务风险

根据2019年中国信通院发布的《开源软件知识产权风险防控研究报告》，可以将知识产权风险，分为以下几类：

* 版权侵权风险
    * 开源软件使用者没有按照开源许可协议的规定使用开源软件，从而导致版权侵权
    * 贡献者将自己不具有版权的代码贡献到开源社区，使得开源软件本身存在版权瑕疵
* 专利侵权风险
    * 内部专利侵权风险，是指开源软件的贡献者以个人名义对其中某项专利技术申请专利并向开源使用者发起专利诉讼
    * 外部专利侵权风险，是指不受开源许可协议约束的第三方向开源软件使用者发起专利诉讼，声称在开源程序中使用其专利
* 商标侵权风险
    * 开源软件使用的开源许可协议未经OSI认证，但使用了open source商标
    * 开源软件使用者未经授权擅自使用贡献者的商标、商号、服务标记等进行软件宣传，导致商标侵权

---

## 开源软件知识产权风险影响因素

* 开源许可协议
    * 不同的开源许可协议，在版权、专利、商标等方面，都有不同的授权规定，因此会带来不同程度的风险
    * 需要明确版本号与许可证的对应关系，关注修改许可协议的情况
* 开源社区知识产权管理
    * 不同社区的知识产权管理严格程度不同，风险程度也会不同
    * Contributor License Agreement（贡献者许可协议）与Developer Certificate of Origin（开发者原创证书）是两种不同的知识产权管理方式
* 开源软件的使用方式
    * 根据使用与分发的情况不同，风险大小也会不同

---

## 外部驱动--开源合规的国际标准

* 202012：ISO/IEC 5230:2020 开源合规国际标准
    * https://www.openchainproject.org/
* Know Your Free and Open Source (FOSS) Responsibilities [i.e., “Policy and Training”]
* Assign Responsibility for Achieving Compliance
* Deliver FOSS Content Documentation and Artifacts
* Review and approve FOSS content
* Understand FOSS Community Engagement
* Certify Adherence to OpenChain Requirements

![](https://www.openchainproject.org/wp-content/uploads/sites/15/2019/10/openchain-hztl-color-01.svg)

---

## 外部驱动--开源和专利-GPL3.0

[https://www.gnu.org/licenses/gpl-faq.html#v3PatentRetaliation](https://www.gnu.org/licenses/gpl-faq.html#v3PatentRetaliation)

第 11 节：专利
GPLv3 提供以下两项专利承诺：
1.禁止向下游分发对象主张专利权：**GPLv3 §10 明确规定不可施加附加条件来要求被许可方的直接分发对象接受专利许可或支付专利许可费。**此条款制定了有关 GPL 软件专利权用尽的统一规则，不考虑任何特定法律体系或区域法律下的国内专利法。
2.贡献者版本中的专利许可：第 11 节指出，**任何向 GPL 软件贡献代码的人都需要将其中涉及的专利许可授予用户。**此规定旨在防止社区内的成员以激进方式向用户主张自己所修改的代码部分的专利权，即防止社区“内部人员叛变”。如果引入修改代码可导致修改后的软件构成侵犯贡献者专利权，贡献者会将原软件中的专利权许可授予所有后续用户、软件修改人或软件衍生作品的修改人，但不会授予代码修改部分中属于他人的专利权许可。此条款还规定，“贡献者版本”完成后获得的专利权也会在版本获得或完成时授予用户。如果某个拥有众多此类专利权的公司收购或聘用了程序修改者，则根据本条款，收购者已获得和后续获得的专利权也会自动传递。例如，微软公司收购诺基亚后，微软基于诺基亚曾修改的任何 GPLv3 程序的任何贡献者版本当前或以后获得的此类专利权都会自动向下游授予许可。微软收购诺基亚导致 GPLv3 程序的微软专利诉讼量整体下降这一现象至今未在行业内得到充分关注。

---

## 外部驱动--IPO,M&A尽调

[https://ipo.org/wp-content/uploads/2013/03/opensourcewhitepaper.pdf](https://ipo.org/wp-content/uploads/2013/03/opensourcewhitepaper.pdf)

* Open source due diligence is a crucial part of your software due diligence. it is a time consuming process because most companies do not have the required visibility into their open source dependency usage.
* Why OSS Diligence for M & A is Important Open Source Software (OSS) licenses1 are ubiquitous in nature and have become a very common way to license software. Given this ubiquitous nature, OSS licenses may impact the valuation of Intellectual Property (IP) transferred during the course of a Merger or Acquisition (M & A) transaction. The classic example of how OSS may impact this valuation is by reducing the value of IP that was otherwise considered to be licensable under a proprietary license, but for its licensing under an OSS license. For the purpose of this whitepaper, we will be discussing the impact of the GNU General Public License (GPL)2 on M & A transactions, and specifically the provision3 A. A Hypothetical of GPL that allows for the automatic licensing of downstream recipients of copyrighted technology licensed under GPL.