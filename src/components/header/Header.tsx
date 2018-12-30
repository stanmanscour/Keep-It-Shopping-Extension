import * as React from 'react';
import NavigationArticles from './NavigationArticles'
import Search from './Search';
import PresentationArticles from './PresentationArticles';
class Header extends React.Component<any> {
    render(){
        return (
            <div className="KPTAPP-header">
                <PresentationArticles />
                <Search />
                <NavigationArticles  />
            </div>
        )
    }
}

export default Header;