export class EndpointHelper {
    private static resourceOne = '/ResourceOne';
    private static app = '/App';
    private static indexHtml = '/index.html';
    private static activities = '/Activities';
    private static contacts = '/Contacts';
    private static admin = 'ResourceOne/Admin';
    private static serviceCenter = '/ServiceCenter';
    private static accountPage = `${EndpointHelper.activities}/ActivityAccountPage.aspx`;
    private static activityPage = `${EndpointHelper.activities}/ActivityPage.aspx`;
    private static casePage = `${EndpointHelper.serviceCenter}/CasePage.aspx`;
    private static prospectPage = `${EndpointHelper.contacts}/ProspectPage.aspx`;
    private static contactPage = `${EndpointHelper.contacts}/ContactPage.aspx`;
    private static resourceOneUrl = `${EndpointHelper.resourceOne}${EndpointHelper.app}${EndpointHelper.indexHtml}`;
    private static opportunityShowQueue = `${EndpointHelper.resourceOne}/Entity/Opportunity/ShowQueue`;
    private static taskShowQueue = `${EndpointHelper.resourceOne}/Entity/Task/ShowQueue`;
    private static viewProductionList = `${EndpointHelper.resourceOne}/Account/Task/ViewProductionList`;
    private static newOpportunityPage = `${EndpointHelper.activityPage}?PageMethod=NewOpportunity`;

    public static login = `${EndpointHelper.resourceOneUrl}#login`;
    public static home = `${EndpointHelper.resourceOneUrl}#home`;
    public static outsideInstitutions = `${EndpointHelper.resourceOneUrl}#${EndpointHelper.admin}/Configuration/OutsideInstitutions`;
    public static newAccount = `${EndpointHelper.resourceOneUrl}${EndpointHelper.accountPage}`;
    public static newCase = `${EndpointHelper.resourceOneUrl}${EndpointHelper.casePage}`;
    public static newProspect = `${EndpointHelper.resourceOneUrl}${EndpointHelper.prospectPage}`;
    public static contact = `${EndpointHelper.resourceOneUrl}${EndpointHelper.contactPage}`;
    public static queuedOpportunites = `${EndpointHelper.resourceOneUrl}#${EndpointHelper.opportunityShowQueue}`;
    public static newOpportunity = `${EndpointHelper.resourceOneUrl}${EndpointHelper.newOpportunityPage}`;
    public static tasksQueue = `${EndpointHelper.resourceOneUrl}#${EndpointHelper.taskShowQueue}`;
    public static production = `${EndpointHelper.resourceOneUrl}#${EndpointHelper.viewProductionList}`;
    public static salesStage = `${EndpointHelper.resourceOneUrl}#${EndpointHelper.admin}/SalesStage/index`;
    public static goals = `${EndpointHelper.resourceOneUrl}#${EndpointHelper.admin}/Goals/index`;
}
