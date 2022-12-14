# 风险场景与防范对策

## 信标委的建议

| 序号 | 安全风险                | 控制措施                                                     | 安全保护目标                                                 |
| ---- | ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | A.2    软件漏洞利用     | 进行代码、组件、软件漏洞检测分析、漏洞修复，对于残余漏洞风险提供虚拟补丁、热补丁更新 | 提升供应活动引入的技术安全风险管理能力                       |
| 2    | A.3    软件后门植入     | 开展入侵检测、操作审计等，并针对维护升级通道进行认证、防止控制和操作审计 | 提升供应活动引入的技术安全风险管理能力                       |
| 3    | A.4    恶意篡改         | 软件完整性的校验、防篡改预警等保护机制                       | 提升供应活动引入的技术安全风险管理能力                       |
| 4    | A.5    假冒伪劣         | 明确相关测评要求，并在软件交付时进行相应的安全检查和审核     | 提升供应活动引入的技术安全风险管理能力                       |

---

| 序号 | 安全风险                | 控制措施                                                     | 安全保护目标                                                 |
| ---- | ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 5    | A.6    知识产权非法使用 | 明确相关知识产权要求，并在交付时进行相应的安全检查和审核     | 提升软件供应链数据安全风险管理能力                           |
| 6    | A.7    供应中断         | 建立供应商安全预警、冗余等机制                               | 提升软件产品或服务中断供应等风险管理能力                     |
| 7    | A.8    信息泄露         | 在数据采集、传输、存储及运维中进行认证、加密、水印、脱敏等数据安全管控。 | 提升软件供应链数据安全风险管理能力                           |

---

| 序号 | 安全风险                | 控制措施                                                     | 安全保护目标                                                 |
| ---- | ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 8    | A.9    开源许可违规使用 | 对开源组件使用许可协议情况进行检测并提供相应的评估说明       | 提升供应活动引入的技术安全风险管理能力                       |
| 9    | A.10    供应链劫持      | 对供应链上游环境安全进行相应的评估和加固；软件运维升级通道进行身份认证、传输加密及访问控制 | 提升软件产品或服务中断供应等风险管理能力                     |
| 10   | A.11    其他风险        | 加强机构职责、制度建设防范多种风险                           | 提升软件产品或服务中断供应等风险管理能力、供应活动引入的技术安全风险管理能力、数据安全风险管理能力 |

---

## 谷歌提出的开源软件漏洞治理框架

### 1. 知悉已有漏洞

1. 获得准确的漏洞数据
2. 建立漏洞数据库的标准架构
3. 准确跟踪依赖关系

### 2. 预防新增漏洞

1. 决定采用新的依赖库时需要理解风险
2. 改进安全关键性软件（security-critical software）的开发流程

### 3.  修复或消除漏洞

1. 了解消除漏洞的可选方案
2. 快速修复通知
3. 修复广泛使用的版本

---

## 谷歌提出的针对关键开源软件的预防措施

### 1. 定义符合更高标准的“关键”开源项目的评判准则
### 2. 禁止对关键软件进行任何单方面变更

1. 要求对关键软件进行代码审查
2. 对关键软件的变更需要得到两个独立方的批准

### 3. 对关键软件参与者进行身份认证

1. 对于关键软件，所有者和维护者不能匿名
2. 为关键软件的贡献者提供严格的身份认证
3. 身份的联合模型

### 4. 风险变化通知
### 5. 增加构件的透明度
### 6. 信任构建过程	

---

## 华为开源安全实践——流程管理

从开源软件选型、入库标准、开源软件 Owner 职责、产品申请开源软件、产品构建、产品发布以及应急响应等流程的各个环节都制定了相应的管理规范和指标要求。

1. 开源软件选型及入库标准：
    1. 保证开源软件基本信息的正确，包括各项软件属性。
    2. 满足选型评估标准四个维度（合法合规、网络安全、技术生态、生命周期）的底线原则要求。
2. 产品使用申请：产品使用开源软件时必须申请，并登记在产品信息树中。
3. 产品构建：对开源软件、补丁文件需独立存放在对应的工程目录下，且开源软件源代码通过自动化从公司开源软件仓库中拉取，不允许人工拷贝进去。
4. 产品发布：对二进制产品发布包进行开源软件检测，需满足安全门禁要求后才允许发布。
5. 应急响应：当漏洞感知系统感知到开源软件安全问题时，自动触发排查流程进行自动排查，并通知到对应产品的研发团队。

---

## 华为开源安全实践——安全防护

在开源软件从入库到使用、运维的整个流程中会进行多层次的安全检测，做到立体防护。

1. 开源软件入库和出库使用时需要对开源软件进行开源软件检测。
2. 在构建阶段会对源代码和构建出来的二进制进行开源软件扫描，确保构建使用的开源软件和设计文档、产品信息树中的开源软件及版本号保持一致。
3. 在发布阶段，会对发布之前的二进制软件包进行开源软件检测，确保已知漏洞应修尽修，只有满足发布安全要求门禁后才允许发布。
4. 在运维阶段，当漏洞感应系统感应到开源软件新漏洞时，会自动触发漏洞通知并启动自动排查机制，对公司所有产品执行开源软件排查，并通知受影响的产品进行漏洞修复。
