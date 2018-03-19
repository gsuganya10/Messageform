export class AppConstants {
   //public static API_ENDPOINT='http://localhost:6040/PBAdminAPI/resource';
   public static API_ENDPOINT='http://172.20.37.181:8880/PBAdminAPI/resource';
   public static UNBLOCK = "UNBLOCK";
   public static BLOCK = "BLOCK";
   public static LOCK = "LOCK";
   public static UNLOCK = "UNLOCK";
   public static SUCCESS ="SUCCESS";
   public static FAILURE ="FAILURE";
   public static Y ="Y";
   public static N ="N";

   public static DEFAULT_ERROR_MSG="Oops Something went wrong :(" ;

   //TITLES
   public static TITLE_PROPERTY_SETTINGS="System Settings";
   public static TITLE_TNC_SETTINGS="T & C Settings";
   public static TITLE_USER_SETTINGS="User Profile Settings"; 
   public static TITLE_CHARITY_SETTINGS="Charity Account Settings"; 
   public static TITLE_BENE_LIST="Beneficiary List";
   public static TITLE_CHAT_BOT_EDITOR="Chat Bot Editor";    

   //RESOURCE URLS
   public static PROPERTY_ROOT = "/property";
   public static PROPERTY_FETCH = "/fetch";
   public static PROPERTY_SAVE = "/save";
	
   public static CHARITY_ROOT = "/charity";
   public static CHARITY_FETCH = "/fetch";
   public static CHARITY_SAVE = "/save";
	
   public static USER_ROOT = "/user";
   public static USER_FETCH = "/fetch";
   public static USER_ACTION = "/action";
	
   public static BENE_ROOT = "/bene";
   public static BENE_FETCH = "/fetch";
	
   public static TNC_ROOT = "/tnc";
   public static TNC_FETCH = "/fetch";
   public static TNC_DOWNLOAD = "/download"; 

   public static CHATBOT_ROOT = "/chatbot";
   public static CHATBOT_FETCH = "/fetch";

}





