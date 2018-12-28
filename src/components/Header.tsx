import * as React from 'react';
import NavigationArticles from './NavigationArticles'
import Search from './header/Search';
class Header extends React.Component<any> {
    render(){
        return (
            <div className="KPTAPP-header">
                <Search />
                <NavigationArticles  />
            </div>
        )
    }
}

export default Header;