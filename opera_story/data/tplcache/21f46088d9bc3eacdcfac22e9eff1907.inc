<!--[field:global name=autoindex runphp="yes"](@me % 5 == 0)?@me="<li class=\"hr\">":@me="<li>";[/field:global]-->
   <li>
    <span>[field:pubdate function="MyDate('y-m-d',@me)"/]</span>
    <div class="a2">[<a href="{dede:field name='arcurl'/}">{dede:field.seotitle /}</a>]</div>
    <a href="[field:arcurl/]">[field:title/]</a></li>