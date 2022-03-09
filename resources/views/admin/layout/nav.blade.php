<nav class="sidebar" data-sidebar-anyclick-close="">
    <!-- START sidebar nav-->
    <ul class="sidebar-nav">
        <!-- START user info-->

        <!-- Iterates over all sidebar items-->
        <li class="nav-heading "><span data-localize="sidebar.heading.HEADER">Main Navigation</span>
        </li>
        <li class=" "><a href="#dashboard" title="Dashboard" data-toggle="collapse">
                <div class="float-right badge badge-success">3</div><em class="icon-speedometer"></em><span
                    data-localize="sidebar.nav.DASHBOARD">Dashboard</span>
            </a>
            <ul class="sidebar-nav sidebar-subnav collapse" id="dashboard">
                <li class="sidebar-subnav-header">Dashboard</li>
                <li class=" "><a href="dashboard.html" title="Dashboard v1"><span>Dashboard
                            v1</span></a></li>
                <li class=" "><a href="dashboard_v2.html" title="Dashboard v2"><span>Dashboard
                            v2</span></a></li>
                <li class=" "><a href="dashboard_v3.html" title="Dashboard v3"><span>Dashboard
                            v3</span></a></li>
            </ul>
        </li>
        <li class=" ">
            <a href="{{route('tag.index')}}" title="Widgets">
                {{-- <div class="float-right badge badge-success">30</div> --}}
                <em class="icon-grid"></em>
                <span data-localize="sidebar.nav.WIDGETS">Tag</span>
            </a>
        </li>

        <li class=" "><a href="#multilevel" title="Multilevel" data-toggle="collapse"><em
                    class="far fa-folder-open"></em><span>Multilevel</span></a>
            <ul class="sidebar-nav sidebar-subnav collapse" id="multilevel">
                <li class="sidebar-subnav-header">Multilevel</li>
                <li class=" "><a href="#level1" title="Level 1" data-toggle="collapse"><span>Level
                            1</span></a>
                    <ul class="sidebar-nav sidebar-subnav collapse" id="level1">
                        <li class="sidebar-subnav-header">Level 1</li>
                        <li class=" "><a href="multilevel-1.html" title="Level1 Item"><span>Level1
                                    Item</span></a></li>
                        <li class=" "><a href="#level2" title="Level 2" data-toggle="collapse"><span>Level 2</span></a>
                            <ul class="sidebar-nav sidebar-subnav collapse" id="level2">
                                <li class="sidebar-subnav-header">Level 2</li>
                                <li class=" "><a href="#level3" title="Level 3" data-toggle="collapse"><span>Level
                                            3</span></a>
                                    <ul class="sidebar-nav sidebar-subnav collapse" id="level3">
                                        <li class="sidebar-subnav-header">Level 3</li>
                                        <li class=" "><a href="multilevel-3.html" title="Level3 Item"><span>Level3
                                                    Item</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul><!-- END sidebar nav-->
</nav>
