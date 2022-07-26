(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{486:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一、环境安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、环境安装"}},[s._v("#")]),s._v(" 一、环境安装")]),s._v(" "),a("h4",{attrs:{id:"安装java环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装java环境"}},[s._v("#")]),s._v(" 安装java环境")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("      yum -y install java-1.8.0-openjdk-devel;\n")])])]),a("h4",{attrs:{id:"安装redis环境并设置开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装redis环境并设置开机自启"}},[s._v("#")]),s._v(" 安装redis环境并设置开机自启")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("      yum -y install epel-release;\n      yum -y install redis;\n      chkconfig redis on;\n      #-- 修改redis密码为123456\n      yum -y install vim;\n      vim /etc/redis.conf;\n      #-- 在文件最下面追加一行\n      requirepass 123456\n      #-- 或者输入 / 搜索 # requirepass foobared\n      #-- 将前面的#删除，将foobared改为123456\n      #-- 修改完成之后 :wq 保存并退出,重启redis\n      service redis restart;\n")])])]),a("h4",{attrs:{id:"安装maven环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装maven环境"}},[s._v("#")]),s._v(" 安装maven环境")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  yum -y install maven;\n")])])]),a("h4",{attrs:{id:"安装mysql8-0数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql8-0数据库"}},[s._v("#")]),s._v(" 安装mysql8.0数据库")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v(' #-- 1.由于centOS7中默认安装了MariaDB,需要先进行卸载\n  rpm -qa | grep -i mariadb\n  rpm -e --nodeps mariadb-libs-5.5.64-1.el7.x86_64\n # -- 查询下本机mysql是否卸载干净\n  rpm -qa | grep mysql\n  yum -y install wget;\n  wget https://repo.mysql.com//mysql80-community-release-el7-3.noarch.rpm\n  yum -y install mysql80-community-release-el7-3.noarch.rpm\n  yum -y install mysql-community-server --nogpgcheck\n  sudo systemctl start mysqld.service;\n  sudo systemctl enable mysqld.service;\n\n  #--查看安装的mysql默认密码,如下图所示\n\n  grep "password" /var/log/mysqld.log\n')])])]),a("p",[a("img",{attrs:{src:"https://images.gitee.com/uploads/images/2021/0207/143052_5000d9e4_8065912.jpeg",alt:"查询mysql默认密码",title:"查询mysql默认密码"}})]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  #--进入mysql 例：mysql -u root -p\"GXOO%eiI/7o>\"\n  mysql - u root -p\"此处为上一步的默认密码\"\n\n  #--修改mysql密码，如下图所示\n  set global validate_password_policy=LOW;\n  ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';\n")])])]),a("p",[a("img",{attrs:{src:"https://images.gitee.com/uploads/images/2021/0207/143854_76cd7719_8065912.jpeg",alt:"修改mysql默认密码",title:"修改mysql默认密码"}})]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  #--退出\n  exit\n\n  #--修改mysql配置\n  vim /etc/my.cnf;\n\n  #--输入 i 进入编辑模式，修改sql_mode设置，如下图所示，将下面sql_mode配置复制，到 [mysqld]下使用 shift+insert 粘贴\n  sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION\n")])])]),a("p",[a("img",{attrs:{src:"https://images.gitee.com/uploads/images/2021/0207/144304_d0d350b6_8065912.jpeg",alt:"修改mysql配置",title:"修改mysql配置"}})]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  #--修改完毕，按esc按键，然后 :wq 保存并退出，重启mysql\n  service mysqld restart;\n")])])]),a("h4",{attrs:{id:"安装elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装elasticsearch"}},[s._v("#")]),s._v(" 安装elasticsearch")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  #-- 在opt目录下安装\n  cd /opt;\n\n  #-- 下载elasticsearch6.8.6\n  wget https://file.72crm.com/static/elasticsearch-6.8.6.zip;\n\n  #-- 下载analysis-icu-6.8.6分词器插件\n  wget https://file.72crm.com/static/analysis-icu-6.8.6.zip;\n\n  #--下载unzip\n  yum -y install unzip\n\n  #--解压刚才下载的elasticsearch\n  unzip elasticsearch-6.8.6.zip\n  \n  #--将分词器插件解压到elasticsearch/plugins目录下\n  unzip analysis-icu-6.8.6.zip -d elasticsearch-6.8.6/plugins/analysis-icu-6.8.6;\n\n  #--创建elasticsearch用户\n  useradd elasticsearch;\n\n  #--赋予用户目录权限\n  chown -R elasticsearch:elasticsearch elasticsearch-6.8.6;\n\n  #--切换至elasticsearch用户\n  su elasticsearch\n\n  #--启动\n  cd elasticsearch-6.8.6/bin\n  ./elasticsearch -d\n  #--退出elasticsearch用户\n  exit\n")])])]),a("h4",{attrs:{id:"上传源码或已经打包好的package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传源码或已经打包好的package"}},[s._v("#")]),s._v(" 上传源码或已经打包好的package")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v(" #--假设源码文件：scrm上传到/opt木目录下，\n  cd /opt/scrm/\n  unzip scrm.zip;\n")])])]),a("h4",{attrs:{id:"导入数据库信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库信息"}},[s._v("#")]),s._v(" 导入数据库信息")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  #-- 进入数据库\n  mysql -uroot -ppassword\n  #-- 创建crm数据库\n  create database jinjiang_scrm_boot character set utf8mb4 collate utf8mb4_general_ci;\n  use jinjiang_scrm_boot ;\n  source /opt/scrm/jinjiang_scrm_boot0712_local_bushu.sql;\n\n  #-- 退出数据库\n  exit;\n")])])]),a("h4",{attrs:{id:"修改配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置信息"}},[s._v("#")]),s._v(" 修改配置信息")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  #-- 进入项目下的application.yml\n  #-- 项目端口\n  server.port \n  #-- redis配置\n  spring.redis \n  #-- mysql配置\n  spring.datasource\n  #-- elasticsearch配置\n  spring.elasticsearch\n  #-- 企业微信的回调参数配置\n  qywx\n  #-- 上传路径\n  scrm.upload.local.uploadPath\n  #-- 配置的客户的接口地址\n  privilege\n  #-- 配置的客户的接口地址\n  privilege.localCompanyId 默认的企业id\n  privilege.superAdminUserId 默认的企业超管\n  privilege.superAdminRoleId 默认的企业roleid\n")])])]),a("h4",{attrs:{id:"启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[s._v("#")]),s._v(" 启动项目")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  cd /opt/scrm/\n  nohup java -Xms128m -Xmx512m -jar scrm-0.0.1-SNAPSHOT.jar> log.out 2>&1 &\n")])])]),a("h4",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v(" #-- 修改绑定企业的corp_id【目前绑定的是：:wwa0bd17a51f26caa8】\n update wk_admin_company set corp_id='自己的企业微信的corypId' where `company_id`='1499653307939344384';\n update `wk_wx_corp` set corp_id='自己的企业微信的corypId' where `company_id`='1499653307939344384';\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);