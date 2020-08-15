![death-cell](https://upload.wikimedia.org/wikipedia/zh/thumb/2/28/Dead_Cells_cover.jpg/220px-Dead_Cells_cover.jpg)

# 背景

Roguelike，死亡重启。

好不容易攒了一身装备，死了让我重来？？

# 使用说明

前方危机，比如碰上一个新BOSS，先存个档，死了再读档。

## 安装
```
npm i death-cell-archiver -g
```

## 存档
```
dca save [name]
```

## 读档
```
dca load [name]
```

## 配置存档路径

默认值
```
/Users/lizheng/Library/Application Support/Steam/userdata/314391335/588650/remote/user_0.dat
```

自定义配置

找到存档路径，配置更新（记得加引号）
```
dca set "/Users/lizheng/Library/Application Support/Steam/userdata/314391335/588650/remote/user_0.dat"
```

# 其他
`dca`本质是一个外置的文件备份系统，其他通过文件存档的游戏，均可使用。

记得针对具体游戏，设置游戏存档路径。
