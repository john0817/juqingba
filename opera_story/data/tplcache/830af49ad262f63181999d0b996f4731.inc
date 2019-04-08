<!--[field:global name=autoindex runphp="yes"](@me % 5 == 0)?@me="<li class=\"hr\">":@me="<li>";[/field:global]-->
   <li>
    <span>[field:pubdate function="MyDate('y-m-d',@me)"/]</span>
    <div class="a2">[
     {dede:field name='typeid' runphp='yes'}
     global $dsql;
     /*获取当前栏目id*/
     $typeid = @me;
     $query = "SELECT reid FROM dede_arctype where id = $typeid";
     $rs = $dsql->GetOne($query);
     $reid = $rs['reid'];//获取到栏目的上级栏目
     /*获取上级栏目id*/
     $query2 = "SELECT * FROM dede_arctype where id = $reid";
     $row = $dsql->GetOne($query2);
     /*输出上级栏目信息*/
     $typename = $row['typename'];
     $link = GetTypeUrl($row['typeid'],MfTypedir($row['typedir']),$row['isdefault'],$row['defaultname'],$row['ispart'],$row['namerule2'],$row['moresite'],$row['siteurl'],$row['sitepath']);
     @me = "<a href='{$link}'>$typename</a>";
     {/dede:field}

     ]
    </div>
    <a href="[field:arcurl/]">[field:typename/]</a></li>