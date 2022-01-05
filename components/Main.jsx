

export const Main = ({children}) => {

    return (
        <div className="layout-main">
            <div className="layout-breadcrumb-container p-d-flex p-jc-between p-ai-center p-shadow-1">
            
            </div>

            <div className="layout-content"> 
                {children}
            </div>
                
        </div>
    )
}
export default Main;