# Middle_Platform_Service

> 中台服务

## DB迁移

* -n 指定名称
* -d 指定路径

### 创建实体

`yarn typeorm entity:create -n [entityName]`

### 创建订阅

`yarn typeorm subscriber:create -n [entityNameSubscriber]`

### 创建新迁移

`yarn typeorm migration:create -n [entitiesName]`

### 从现有表结构迁移

`yarn typeorm migration:generate -n [entitiesName]`

### 运行迁移

`yarn typeorm migration:run`

### 显示所有迁移及其是否已应用

`yarn typeorm migration:show`

### 撤销上次迁移

`yarn typeorm migration:revert`

### 同步数据库架构

`yarn typeorm schema:sync`

### 删除数据库架构

`yarn typeorm schema:drop`
