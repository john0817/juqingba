<!--[field:global name=autoindex runphp="yes"](@me % 5 == 0)?@me="<li class=\"hr\">":@me="<li>";[/field:global]-->
   <li>
    <span>[field:pubdate function="MyDate('y-m-d',@me)"/]</span>
    <div class="a2">[
     {dede:field name='typeid' runphp='yes'}
     global $dsql;
     /*��ȡ��ǰ��Ŀid*/
     $typeid = @me;
     $query = "SELECT reid FROM dede_arctype where id = $typeid";
     $rs = $dsql->GetOne($query);
     $reid = $rs['reid'];//��ȡ����Ŀ���ϼ���Ŀ
     /*��ȡ�ϼ���Ŀid*/
     $query2 = "SELECT * FROM dede_arctype where id = $reid";
     $row = $dsql->GetOne($query2);
     /*����ϼ���Ŀ��Ϣ*/
     $typename = $row['typename'];
     $link = GetTypeUrl($row['typeid'],MfTypedir($row['typedir']),$row['isdefault'],$row['defaultname'],$row['ispart'],$row['namerule2'],$row['moresite'],$row['siteurl'],$row['sitepath']);
     @me = "<a href='{$link}'>$typename</a>";
     {/dede:field}

     ]
    </div>
    <a href="[field:arcurl/]">[field:typename/]</a></li>