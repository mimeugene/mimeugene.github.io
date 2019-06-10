/* Copyright (C) 2018 Interactive Brokers LLC. All rights reserved. This code is subject to the terms
 * and conditions of the IB API Non-Commercial License or the IB API Commercial License, as applicable. */

package TestJavaClient;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import org.jsoup.Jsoup;
import org.jsoup.helper.Validate;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.io.IOException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.text.DecimalFormat;

import java.io.IOException;
//import static org.junit.Assert.*;

import javax.swing.*;

import com.ib.client.*;
import java.awt.Color;
import static java.lang.Thread.sleep;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
//import org.apache.commons.collections4.CollectionUtils;
//import org.apache.commons.collections4.collection;
import java.util.Collection;
import java.util.Collections;
import org.openqa.selenium.support.ui.Select;
import samples.testbed.orders.AvailableAlgoParams;

class ErrrBot extends JFrame implements EWrapper {
    private static final int NOT_AN_FA_ACCOUNT_ERROR = 321 ;
    private int faErrorCodes[] = { 503, 504, 505, 522, 1100, NOT_AN_FA_ACCOUNT_ERROR } ;
    private boolean faError ;

    private EJavaSignal m_signal = new EJavaSignal();
    private EClientSocket   m_client = new EClientSocket( this, m_signal);
    private EReader m_reader;
    private IBTextPanel     m_tickers = new IBTextPanel("Market and Historical Data", false);
    private IBTextPanel     m_TWS = new IBTextPanel("TWS Server Responses", false);
    private IBTextPanel     m_errors = new IBTextPanel("Errors and Messages", false);
    private OrderDlg        m_orderDlg = new OrderDlg( this);
    private ExtOrdDlg       m_extOrdDlg = new ExtOrdDlg( m_orderDlg);
    private AccountDlg      m_acctDlg = new AccountDlg(this);
    private Map<Integer, MktDepthDlg> m_mapRequestToMktDepthDlg = new HashMap<>();
    private NewsBulletinDlg m_newsBulletinDlg = new NewsBulletinDlg(this);
    private ScannerDlg      m_scannerDlg = new ScannerDlg(this);
	private GroupsDlg       m_groupsDlg;
	private SecDefOptParamsReqDlg m_secDefOptParamsReq = new SecDefOptParamsReqDlg(this);
	private SmartComponentsParamsReqDlg m_smartComponentsParamsReq = new SmartComponentsParamsReqDlg(this);
    private HistoricalNewsDlg m_historicalNewsDlg = new HistoricalNewsDlg(this);
    private NewsArticleDlg m_newsArticleDlg = new NewsArticleDlg(this);
	private MarketRuleDlg   m_marketRuleDlg = new MarketRuleDlg(this);
    private PnLDlg     m_pnlDlg = new PnLDlg(this);
    private PnLSingleDlg   m_pnlSingleDlg = new PnLSingleDlg(this);

    private List<TagValue> m_mktDataOptions = new ArrayList<>();
    private List<TagValue> m_chartOptions = new ArrayList<>();
    private List<TagValue> m_mktDepthOptions = new ArrayList<>();
    private List<TagValue> m_realTimeBarsOptions = new ArrayList<>();
    private List<TagValue> m_historicalNewsOptions = new ArrayList<>();
    private List<TagValue> m_newsArticleOptions = new ArrayList<>();

    private String faGroupXML ;
    private String faProfilesXML ;
    private String faAliasesXML ;
    String m_FAAcctCodes;
    boolean m_bIsFAAccount = false;
    static WebDriver driver;
//    static Wait<WebDriver> wait;
    private String baseUrl;
    private StringBuffer verificationErrors = new StringBuffer();
//    protected static DesiredCapabilities dCaps;

    private boolean m_disconnectInProgress = false;


    ArrayList<String> rawEarnings = new ArrayList<>();
    ArrayList<String> dateEarnings = new ArrayList<>();
    ArrayList<String> matchArray = new ArrayList<>();
    List<TagValue> mktDataOptions = new ArrayList<>();
    ArrayList<String> testArray = new ArrayList<>();
    double tempPrice = 0;
    double tempPosition = 0;

    boolean positionSwitch = false;


//    positionarray[0].symbol,quantity = 100;

    ArrayList<String> rawTrending = new ArrayList<>();
    List<String> seleniumResults= new ArrayList<String>();
    List<String> erResults= new ArrayList<String>();
    List<String> ninePlusResults= new ArrayList<String>();
    List<String> seleniumResultsSell= new ArrayList<String>();
    List<String> refreshChecker = new ArrayList<String>();
    List<String> currentPositions = new ArrayList<String>();
    ArrayList<Integer> tempArray = new ArrayList<Integer>();

    List<Object> allPositions = new ArrayList<Object>();



    public int orderIds;
    public int buyCounter = 0;
    public int sellCounter = 0;

    String[] bannedWords = {"SYMBOL", "EVR", "ESTIMATED","EARNINGS","DATE","PAST","PRICE","MOVEMENT","IMPLIED",
        "MOVE","CALCULATION","AFTER","HOURS","MOVEMENT","LAST","MONTH","LAST","EARNINGS","POSITION","OPTION","COST",
        "IMPLIED","MOVE","PRE","EARNINGS","CLOSE","AFTER","MARKET","PRICE","AFTER","MARKET","GAP","AC","BO"};
    int[] removeindex = {};
    int tickerId = 0;
    int biggest1;
    boolean biggestbool1;
    int biggest2;
    boolean biggestbool2;
    boolean intraday = false;
    String alltext = "";
    DecimalFormat df = new DecimalFormat(".##");
    boolean auto = true;
    public String timeStamp;
    String checker = "";
    int counter = 0;
    boolean scanOnce = false;
    boolean buyOnce = false;
    boolean removeOnce = false;
    boolean liquidateOnce = false;
    int buyingPower = 80000;
    String banned = "";
    public ArrayList<Contract> contracts = new ArrayList<>();
    int nonecounter = 0;
    String timeDelay = "0000";
    String timeNow = "0000";











    ErrrBot() {
        JPanel scrollingWindowDisplayPanel = new JPanel( new GridLayout( 0, 1) );
        scrollingWindowDisplayPanel.add( m_tickers);
        scrollingWindowDisplayPanel.add( m_TWS);
        scrollingWindowDisplayPanel.add( m_errors);

        JPanel buttonPanel = createButtonPanel();

        getContentPane().add( scrollingWindowDisplayPanel, BorderLayout.CENTER);
        getContentPane().add( buttonPanel, BorderLayout.EAST);
        setSize( 900, 800);
        setTitle( "Sample");
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

    	m_groupsDlg = new GroupsDlg(this, m_client);
    }

    private void onReqPositions() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    interface ContractDetailsCallback {
    	void onContractDetails(ContractDetails contractDetails);
    	void onContractDetailsEnd();
    	void onError(int errorCode, String errorMsg);
    }

    private final Map<Integer, ContractDetailsCallback> m_callbackMap = new HashMap<>();

    List<ContractDetails> lookupContract(Contract contract) throws InterruptedException {
        final CompletableFuture<List<ContractDetails>> future = new CompletableFuture<>();

        synchronized (m_callbackMap) {
            m_callbackMap.put(m_orderDlg.id(), new ContractDetailsCallback() {

                private final List<ContractDetails> list = new ArrayList<>();

                @Override
                public void onError(int errorCode, String errorMsg) {
                    future.complete(list);
                }

                @Override
                public void onContractDetailsEnd() {
                    future.complete(list);
                }

                @Override
                public void onContractDetails(ContractDetails contractDetails) {
                    list.add(contractDetails);
                }
            });
        }
        m_client.reqContractDetails(m_orderDlg.id(), contract);
    	try {
            return future.get();
        } catch (final ExecutionException e) {
    	    return null;
        } finally {
    	    synchronized (m_callbackMap) {
    	        m_callbackMap.remove(m_orderDlg.id());
            }
        }
    }

    public JPanel createButtonPanel() {
        JPanel buttonPanel = new JPanel( new GridLayout( 0, 1) );
        JButton butConnect = new JButton( "Connect");
        butConnect.addActionListener(e -> onConnect());
        JButton butDisconnect = new JButton( "Disconnect");
        JButton butautomate = new JButton( "Automate");
        butautomate.addActionListener(e -> automate());
//        butautomate.setForeground(Color.RED);
        JButton butstopAuto = new JButton( "Stop Auto");
        butstopAuto.addActionListener(e -> automateStop());
        butDisconnect.addActionListener(e -> onDisconnect());
        JButton testButtonn = new JButton( "Test Button");
        testButtonn.addActionListener(e -> testButton());
        JButton <Website Removed> = new JButton( "<Website Removed>scan");
        <Website Removed>.addActionListener(e -> <Website Removed>Scan());
        JButton butRecommended = new JButton( "Buy All");
        butRecommended.addActionListener(e -> buyRecommended());
//        JButton butrefreshStocks = new JButton( "Liquidate");
//        butrefreshStocks.addActionListener(e -> liquidate());
        JButton buterLooseFilter = new JButton( "ER Loose Filter");
        buterLooseFilter.addActionListener(e -> {
            try {
                erLooseFilter();
            } catch (IOException ex) {
                Logger.getLogger(ErrrBot.class.getName()).log(Level.SEVERE, null, ex);
            }
        });
//        JButton butMktData = new JButton( "Req Mkt Data");
//        butMktData.addActionListener(e -> onReqMktData());
//        JButton butCancelMktData = new JButton( "Cancel Mkt Data");
//        butCancelMktData.addActionListener(e -> onCancelMktData());
//        JButton butMktDepth = new JButton( "Req Mkt Depth");
//        butMktDepth.addActionListener(e -> onReqMktDepth());
//        JButton butCancelMktDepth = new JButton( "Cancel Mkt Depth");
//        butCancelMktDepth.addActionListener(e -> onCancelMktDepth());
//        JButton butHistoricalData = new JButton( "Historical Data");
//        butHistoricalData.addActionListener(e -> onHistoricalData());
//        JButton butCancelHistoricalData = new JButton( "Cancel Hist. Data");
//        butCancelHistoricalData.addActionListener(e -> onCancelHistoricalData());
//        JButton butFundamentalData = new JButton( "Fundamental Data");
//        butFundamentalData.addActionListener(e -> onFundamentalData());
//        JButton butCancelFundamentalData = new JButton( "Cancel Fund. Data");
//        butCancelFundamentalData.addActionListener(e -> onCancelFundamentalData());
//        JButton butRealTimeBars = new JButton( "Req Real Time Bars");
//        butRealTimeBars.addActionListener(e -> onReqRealTimeBars());
//        JButton butCancelRealTimeBars = new JButton( "Cancel Real Time Bars");
//        butCancelRealTimeBars.addActionListener(e -> onCancelRealTimeBars());
//        JButton butCurrentTime = new JButton( "Req Current Time");
//        butCurrentTime.addActionListener(e -> onReqCurrentTime());
//        JButton butScanner = new JButton( "Market Scanner");
//        butScanner.addActionListener(e -> onScanner());
//        JButton butOpenOrders = new JButton( "Req Open Orders");
//        butOpenOrders.addActionListener(e -> onReqOpenOrders());
//        JButton butCalculateImpliedVolatility = new JButton( "Calculate Implied Volatility");
//        butCalculateImpliedVolatility.addActionListener(e -> onCalculateImpliedVolatility());
//        JButton butCancelCalculateImpliedVolatility = new JButton( "Cancel Calc Impl Volatility");
//        butCancelCalculateImpliedVolatility.addActionListener(e -> onCancelCalculateImpliedVolatility());
//        JButton butCalculateOptionPrice = new JButton( "Calculate Option Price");
//        butCalculateOptionPrice.addActionListener(e -> onCalculateOptionPrice());
//        JButton butCancelCalculateOptionPrice = new JButton( "Cancel Calc Opt Price");
//        butCancelCalculateOptionPrice.addActionListener(e -> onCancelCalculateOptionPrice());
//        JButton butWhatIfOrder = new JButton( "What If");
//        butWhatIfOrder.addActionListener(e -> onWhatIfOrder());
//        JButton butPlaceOrder = new JButton( "Place Order");
//        butPlaceOrder.addActionListener(e -> onPlaceOrder());
//        JButton butCancelOrder = new JButton( "Cancel Order");
//        butCancelOrder.addActionListener(e -> onCancelOrder());
//        JButton butExerciseOptions = new JButton( "Exercise Options");
//        butExerciseOptions.addActionListener(e -> onExerciseOptions());
//        JButton butExtendedOrder = new JButton( "Extended");
//        butExtendedOrder.addActionListener(e -> onExtendedOrder());
//        JButton butAcctData = new JButton( "Req Acct Data");
//        butAcctData.addActionListener(e -> onReqAcctData());
//        JButton butContractData = new JButton( "Req Contract Data");
//        butContractData.addActionListener(e -> onReqContractData());
//        JButton butExecutions = new JButton( "Req Executions");
//        butExecutions.addActionListener(e -> onReqExecutions());
//        JButton butNewsBulletins = new JButton( "Req News Bulletins");
//        butNewsBulletins.addActionListener(e -> onReqNewsBulletins());
//        JButton butServerLogging = new JButton( "Server Logging");
//        butServerLogging.addActionListener(e -> onServerLogging());
//        JButton butAllOpenOrders = new JButton( "Req All Open Orders");
//        butAllOpenOrders.addActionListener(e -> onReqAllOpenOrders());
//        JButton butAutoOpenOrders = new JButton( "Req Auto Open Orders");
//        butAutoOpenOrders.addActionListener(e -> onReqAutoOpenOrders());
//        JButton butManagedAccts = new JButton( "Req Accounts");
//        butManagedAccts.addActionListener(e -> onReqManagedAccts());
//        JButton butFinancialAdvisor = new JButton( "Financial Advisor");
//        butFinancialAdvisor.addActionListener(e -> onFinancialAdvisor());
        JButton butParseEarningsDate = new JButton( "Parse Sellers");
        butParseEarningsDate.addActionListener(e -> {
            try {
                filteredScanSell();
            } catch (IOException ex) {
                Logger.getLogger(ErrrBot.class.getName()).log(Level.SEVERE, null, ex);
            }
        });


                JButton butParseTrending = new JButton( "Parse Buyers");
        butParseTrending.addActionListener(e -> {
            try {
                parseTrending();
            } catch (IOException ex) {
                Logger.getLogger(ErrrBot.class.getName()).log(Level.SEVERE, null, ex);
            }
        });
//        JButton butReqMarketDataType = new JButton( "Req Market Data Type");
//        butReqMarketDataType.addActionListener(e -> onReqMarketDataType());
//        JButton butRequestAccountSummary = new JButton( "Request Account Summary");
//        butRequestAccountSummary.addActionListener(e -> onRequestAccountSummary());
//        JButton butCancelAccountSummary = new JButton( "Cancel Account Summary");
//        butCancelAccountSummary.addActionListener(e -> onCancelAccountSummary());
//        JButton butRequestPositionsMulti = new JButton( "Request Positions Multi");
//        butRequestPositionsMulti.addActionListener(e -> onRequestPositionsMulti());
//        JButton butCancelPositionsMulti = new JButton( "Cancel Positions Multi");
//        butCancelPositionsMulti.addActionListener(e -> onCancelPositionsMulti());
//        JButton butRequestAccountUpdatesMulti = new JButton( "Request Account Updates Multi");
//        butRequestAccountUpdatesMulti.addActionListener(e -> onRequestAccountUpdatesMulti());
//        JButton butCancelAccountUpdatesMulti = new JButton( "Cancel Account Updates Multi");
//        butCancelAccountUpdatesMulti.addActionListener(e -> onCancelAccountUpdatesMulti());
//        JButton butRequestSecurityDefinitionOptionParameters = new JButton( "Request Security Definition Option Parameters");
//        butRequestSecurityDefinitionOptionParameters.addActionListener(e -> onRequestSecurityDefinitionOptionParameters());
//        JButton butGroups = new JButton( "Groups");
//        butGroups.addActionListener(e -> onGroups());
//        JButton butRequestFamilyCodes = new JButton( "Request Family Codes");
//        butRequestFamilyCodes.addActionListener(e -> onRequestFamilyCodes());
//        JButton butRequestMatchingSymbols = new JButton( "Request Matching Symbols");
//        butRequestMatchingSymbols.addActionListener(e -> onRequestMatchingSymbols());
//        JButton butReqMktDepthExchanges = new JButton( "Req Mkt Depth Exchanges");
//        butReqMktDepthExchanges.addActionListener(e -> onReqMktDepthExchanges());
//        JButton butReqSmartComponents = new JButton( "Req Smart Components");
//        butReqSmartComponents.addActionListener(e -> onReqSmartComponents());
//        JButton butRequestNewsProviders = new JButton( "Request News Providers");
//        butRequestNewsProviders.addActionListener(e -> onRequestNewsProviders());
//        JButton butReqNewsArticle = new JButton( "Req News Article");
//        butReqNewsArticle.addActionListener(e -> onReqNewsArticle());
//        JButton butReqHistoricalNews = new JButton( "Req Historical News");
//        butReqHistoricalNews.addActionListener(e -> onReqHistoricalNews());
//        JButton butHeadTimestamp = new JButton( "Req Head Time Stamp");
//        butHeadTimestamp.addActionListener(e -> onHeadTimestamp());
//        JButton butHistogram = new JButton("Req Histogram");
//        butHistogram.addActionListener(e -> onHistogram());
//        JButton butHistogramCancel = new JButton("Cancel Histogram");
//        butHistogramCancel.addActionListener(e -> onHistogramCancel());
//        JButton butReqMarketRule = new JButton("Req Market Rule");
//        butReqMarketRule.addActionListener(e -> onReqMarketRule());
//        JButton butReqPnL = new JButton("Req PnL");
//        butReqPnL.addActionListener(e -> onReqPnL());
//        JButton butCancelPnL = new JButton("Cancel PnL");
//        butCancelPnL.addActionListener(e -> onCancelPnL());
//        JButton butReqPnLSingle = new JButton("Req PnL Single");
//        butReqPnLSingle.addActionListener(e -> onReqPnLSingle());
//        JButton butCancelPnLSingle = new JButton("Cancel PnL Single");
//        butCancelPnLSingle.addActionListener(e -> onCancelPnLSingle());
//        JButton butReqHistoricalTicks = new JButton("Req Historical Ticks");
//        butReqHistoricalTicks.addActionListener(e -> onReqHistoricalTicks());
//        JButton butReqTickByTickData = new JButton("Req Tick-By-Tick");
//        butReqTickByTickData.addActionListener(e -> onReqTickByTickData());
//        JButton butCancelTickByTickData = new JButton("Cancel Tick-By-Tick");
//        butCancelTickByTickData.addActionListener(e -> onCancelTickByTickData());

        JButton butClear = new JButton( "Clear");
        butClear.addActionListener(e -> onClear());
        JButton butClose = new JButton( "Close");
        butClose.addActionListener(e -> onClose());


//        buttonPanel.add( new JPanel() );

        BtnPairSlot pairSlot = new BtnPairSlot(buttonPanel);
        pairSlot.add(butConnect, butDisconnect);
        pairSlot.add(butParseEarningsDate, butParseTrending);
        buttonPanel.add(butRecommended);
        buttonPanel.add(testButtonn);
        buttonPanel.add(<Website Removed>);
//        buttonPanel.add(butrefreshStocks);
        buttonPanel.add(butautomate);
        butautomate.setForeground(Color.RED);
        buttonPanel.add(butstopAuto);
        buttonPanel.add(buterLooseFilter);

//        pairSlot.add(butMktData, butCancelMktData);
//        pairSlot.add(butMktDepth, butCancelMktDepth);
//        pairSlot.add(butHistoricalData, butCancelHistoricalData);
//        pairSlot.add(butFundamentalData, butCancelFundamentalData);
//        pairSlot.add(butRealTimeBars, butCancelRealTimeBars);
//        pairSlot.add(butRealTimeBars, butCancelRealTimeBars);
//        pairSlot.add(butCurrentTime);
//        pairSlot.add(butCalculateImpliedVolatility, butCancelCalculateImpliedVolatility);
//        pairSlot.add(butCalculateOptionPrice, butCancelCalculateOptionPrice);

//        buttonPanel.add( new JPanel() );
//        buttonPanel.add( butWhatIfOrder);
//        pairSlot.add(butPlaceOrder, butCancelOrder);
//        buttonPanel.add( butExerciseOptions);
//        buttonPanel.add( butExtendedOrder);

//        buttonPanel.add( new JPanel() );
//        buttonPanel.add( butContractData );
//        buttonPanel.add(butParseEarningsDate);
//        buttonPanel.add( butAllOpenOrders);
//        buttonPanel.add( butAutoOpenOrders);
//        buttonPanel.add( butAcctData );
//        buttonPanel.add( butExecutions );
//        buttonPanel.add( butNewsBulletins );
//        buttonPanel.add( butServerLogging );
//        buttonPanel.add( butManagedAccts );
//        buttonPanel.add( butFinancialAdvisor ) ;
//        buttonPanel.add( butGlobalCancel ) ;
//        buttonPanel.add( butReqMarketDataType ) ;
//        pairSlot.add(butRequestAccountSummary, butCancelAccountSummary);
//        pairSlot.add(butRequestPositionsMulti, butCancelPositionsMulti);
//        pairSlot.add(butRequestAccountUpdatesMulti, butCancelAccountUpdatesMulti);
//
//        buttonPanel.add(butRequestSecurityDefinitionOptionParameters);
//        buttonPanel.add(butGroups);
//        buttonPanel.add(butRequestFamilyCodes);
//        buttonPanel.add(butRequestMatchingSymbols);
//        buttonPanel.add(butReqMktDepthExchanges);
//        buttonPanel.add(butReqSmartComponents);
//        buttonPanel.add(butRequestNewsProviders);
//        buttonPanel.add(butReqNewsArticle);
//        buttonPanel.add(butReqHistoricalNews);
//        buttonPanel.add(butHeadTimestamp);
//
//        pairSlot.add(butHistogram, butHistogramCancel);
//        buttonPanel.add(butReqMarketRule);
//        pairSlot.add(butReqPnL, butCancelPnL);
//        pairSlot.add(butReqPnLSingle, butCancelPnLSingle);
//        buttonPanel.add(butReqHistoricalTicks);
//        pairSlot.add(butReqTickByTickData, butCancelTickByTickData);

//        buttonPanel.add( new JPanel() );
        pairSlot.add(butClear, butClose);

        return buttonPanel;
    }

    class BtnPairSlot {

        private JPanel m_parentPanel;

        public BtnPairSlot(JPanel parentPanel) {
            m_parentPanel = parentPanel;
        }

        public void add(JButton left, JButton right) {
            JPanel subPanel = new JPanel(new GridLayout(0, 1));

            subPanel.add(left);
            subPanel.add(right);
            m_parentPanel.add(subPanel);
        }

    }


	private void onConnect() {
		if(m_client.isConnected())
			return;
        m_bIsFAAccount = false;
        // get connection parameters
        ConnectDlg dlg = new ConnectDlg( this);
        dlg.setVisible(true);
        if( !dlg.m_rc) {
            return;
        }

        // connect to TWS
        m_disconnectInProgress = false;

        m_client.optionalCapabilities(dlg.m_retOptCapts);
        m_client.eConnect( dlg.m_retIpAddress, dlg.m_retPort, dlg.m_retClientId);
        if (m_client.isConnected()) {
//            butConnect.setBackground(Color.red);
            m_TWS.add("Connected to Tws server version " +
                       m_client.serverVersion() + " at " +
                       m_client.getTwsConnectionTime());
        }

        m_reader = new EReader(m_client, m_signal);

        m_reader.start();

        new Thread(() -> {
            processMessages();

            int i = 0;
            System.out.println(i);
        }).start();
    }

	private void processMessages() {

		while (m_client.isConnected()) {
			m_signal.waitForSignal();
				try {
					m_reader.processMsgs();
				} catch (Exception e) {
					error(e);
				}
		}
	}

    private void onDisconnect() {
        // disconnect from TWS
        m_disconnectInProgress = true;
        m_client.eDisconnect();
    }

    private void onClear() {
        m_tickers.clear();
        m_TWS.clear();
        m_errors.clear();
    }

    private void onClose() {
        System.exit(1);
    }


    public void parseER() throws IOException{
        Document erdoc = Jsoup.connect("http://www.rightline.net/calendar/").get();
        Element TTable = erdoc.select("#tblData > tbody").get(0);
        Elements TElements = TTable.select("tr");
        for (int i = 0; i < TElements.size(); i++) { //first row is the col names so skip it.
            Element row = TElements.get(i);
            Elements cols = row.select("td");
            dateEarnings.add(cols.get(1).text() + cols.get(2).text());
            rawEarnings.add(cols.get(1).text());
        }

        for (int y = 0; y < rawEarnings.size(); y++){
            m_TWS.add(rawEarnings.get(y));
        }
    }

    public void currentTime() {
        timeStamp = new SimpleDateFormat("HH:mm").format(Calendar.getInstance().getTime());
        System.out.println(timeStamp);
    }

    public void compareArrays(List<String> array1, List<String> array2){
    matchArray.clear();
    for (String item : array1) {
        if (array2.contains(item)) {
            matchArray.add(item);
            m_TWS.add("Item " + item + " added");
        }
    }
        m_TWS.add("Printing matching Symbols now!");

    for (int y = 0; y < matchArray.size(); y++){
        m_TWS.add(matchArray.get(y));
    }
}

    public void parseTrending() throws IOException{
        filteredScanBuy();
        compareArrays(rawEarnings, seleniumResults);
    }

    public void parseSell() throws IOException{
        filteredScanSell();
        compareArrays(rawEarnings, seleniumResults);
    }

    public void automateStop(){
        auto = false;
    }

    public void automate (){
       new Thread() {
            @Override
            public void run() {
                if (!m_client.isConnected()) {
                    m_TWS.add("Connect and try again");
                }
//                m_TWS.add("Connect and try again");
                while (auto == true){
                    try {
                        sleep(15000);
                    } catch (InterruptedException ex) {
                        Logger.getLogger(ErrrBot.class.getName()).log(Level.SEVERE, null, ex);
                    }
                    currentTime();
                    System.out.println("timestamp is : " + timeStamp);
                    String timeS = "";
                    System.out.println("TimeStamp type is: " + timeStamp.getClass().getName());

                    if (timeStamp.equals("15:45") && (scanOnce == false)){
                        try {
                            <Website Removed>Scan();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                        scanOnce = true;
                    }

                    else if (timeStamp.equals("15:50") && (removeOnce == false)){
                        try {
                            removeStocks();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                        removeOnce = true;
                    }

                    else if (timeStamp.equals("15:51") && (buyOnce == false)){
                        try {
                            buyRecommended();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                        buyOnce = true;
                    }
                    else if (timeStamp.equals("09:31") && (liquidateOnce == false)){
                        try {
                            positionScan();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                        liquidateOnce = true;
                    }

                    else if (timeStamp.equals("00:00")){
                        try {
                            liquidateOnce = false;
                            buyOnce = false;
                            removeOnce = false;
                            scanOnce = false;
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }

                    m_TWS.add(".");

                }
            }
        }.start();
    }

    public void erLooseFilter() throws IOException {
        erResults.clear();
        System.setProperty("webdriver.chrome.driver", "/Users/mim/developer/ErrrBot/chromedriver");
        ChromeOptions options = new ChromeOptions();
//        options.addArguments("headless");
        options.addArguments("window-size=1200x600");
        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, 15);

        driver.get("https://www.barchart.com/stocks/stocks-screener?viewName=75133&orderBy=nextEarningsDate&orderDir=asc");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("body")));
        driver.findElement(By.cssSelector("#bc-main-content-wrapper > div > div.main-content-wrapper.content.js-main-content-wrapper > div.row > div > div > div > div:nth-child(2) > form > div:nth-child(2) > input")).sendKeys("mim.eugene@gmail.com");
        driver.findElement(By.cssSelector("#login-page-form-password")).sendKeys(<Password Removed>);
        driver.findElement(By.cssSelector("#bc-main-content-wrapper > div > div.main-content-wrapper.content.js-main-content-wrapper > div.row > div > div > div > div:nth-child(2) > form > div.form-group.text-center > button")).submit();
        new Select(driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(2) > div.bc-form > screener-load-screener-toolbar > div > screener-saved-screeners > div > select"))).selectByVisibleText("earningsfilter2");
        driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(2) > div.bc-screener__footer > a")).click();
        WebElement area = driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener.ng-isolate-scope > div:nth-child(3) > div.bc-datatable.ng-isolate-scope"));
        waitForTextToAppear(driver, "Symbol", area);
        System.out.println("Page title is: " + driver.getTitle());        // a guarantee that the test was really executed
        WebElement element1 = driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(3) > div.bc-datatable"));
        alltext = element1.getText();
        Matcher m = Pattern.compile("[A-Z]{2,}")
                .matcher(alltext);
        while (m.find()) {
            erResults.add(m.group());
        }
        cleanArray(erResults);
        for (int i = 0; i < erResults.size(); i++) { //first row is the col names so skip it.
            m_TWS.add(erResults.get(i));
        }
        driver.quit();
        filterFurther();
    }

    public void filterFurther() throws IOException {
        counter = 0;
        System.setProperty("webdriver.chrome.driver", "/Users/mim/developer/ErrrBot/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        options.addArguments("window-size=1200x600");
        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, 15);

        for (int i = 0; i < erResults.size(); i++) { //first row is the col names so skip it.
            driver.get("https://www.zacks.com/stock/research/" + erResults.get(i) + "/earnings-announcements");
            int rowCount = driver.findElements(By.xpath("//table[@id='earnings_announcements_earnings_table']/tbody/tr")).size();
            if (rowCount == 10){
                for (int z = 2; z < 11; z++) { //first row is the col names so skip it.
                    WebElement columnText = driver.findElement(By.cssSelector("#earnings_announcements_earnings_table > tbody > tr:nth-child(" + z + ") > td:nth-child(6)"));
                    checker = columnText.getText();
                    if (checker.contains("+") == true) {
                        counter++;
                    }
                }
            }
            System.out.println(erResults.get(i) + " result counter is " + counter);
            if (counter > 7){
                ninePlusResults.add(erResults.get(i));
                System.out.println("Adding " + erResults.get(i) + " to list now!");
                counter = 0;
            }
            counter = 0;
        }
        driver.quit();
        m_TWS.add("printing good  now");
        for (int v = 0; v < ninePlusResults.size(); v++) { //first row is the col names so skip it.
            m_TWS.add(ninePlusResults.get(v));
        }
    }

    public void filterFurtherNew() throws IOException {
        counter = 0;
        System.setProperty("webdriver.chrome.driver", "/Users/mim/developer/ErrrBot/chromedriver");
        ChromeOptions options = new ChromeOptions();
//        options.addArguments("headless");
        options.addArguments("window-size=1200x600");
        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, 15);


        wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("body")));
        driver.findElement(By.cssSelector("body > table:nth-child(8) > tbody > tr:nth-child(2) > td:nth-child(2) > a:nth-child(1)")).click();
        driver.findElement(By.cssSelector("#id_username")).sendKeys("mim.eugene@gmail.com");
        driver.findElement(By.cssSelector("#topmenu_login > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=\"image\"]")).click();



//        for (int i = 0; i < erResults.size(); i++) { //first row is the col names so skip it.
//            driver.get(<Website Removed> + erResults.get(i));
//            int rowCount = driver.findElements(By.xpath("//table[@id='earnings_announcements_earnings_table']/tbody/tr")).size();
//            if (rowCount == 10){
//                for (int z = 2; z < 11; z++) { //first row is the col names so skip it.
//                    WebElement columnText = driver.findElement(By.cssSelector("#earnings_announcements_earnings_table > tbody > tr:nth-child(" + z + ") > td:nth-child(6)"));
//                    checker = columnText.getText();
//                    if (checker.contains("+") == true) {
//                        counter++;
//                    }
//                }
//            }
//            System.out.println(erResults.get(i) + " result counter is " + counter);
//            if (counter > 7){
//                ninePlusResults.add(erResults.get(i));
//                System.out.println("Adding " + erResults.get(i) + " to list now!");
//                counter = 0;
//            }
//            counter = 0;
//        }
//        driver.quit();
//        m_TWS.add("printing good  now");
//        for (int v = 0; v < ninePlusResults.size(); v++) { //first row is the col names so skip it.
//            m_TWS.add(ninePlusResults.get(v));
//        }
    }

    public static void waitForTextToAppear(WebDriver newDriver, String textToAppear, WebElement element) {
    WebDriverWait wait = new WebDriverWait(newDriver,30);
    wait.until(ExpectedConditions.textToBePresentInElement(element, textToAppear));
    }

    public void filteredScanBuy() throws IOException {
        new Thread() {
            @Override
            public void run() {
                seleniumResults.clear();
        System.setProperty("webdriver.chrome.driver", "/Users/mim/developer/ErrrBot/chromedriver");
        ChromeOptions options = new ChromeOptions();
//        options.addArguments("headless");
        options.addArguments("window-size=1200x600");
        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, 15);

        driver.get("https://www.barchart.com/stocks/stocks-screener?viewName=filter_view");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("body")));
//        driver.findElement(By.cssSelector("body > div.reveal-modal.fade.bc-fdn-modal.in > div > div > div.bc-ads-modal__content > div > div:nth-child(1) > div > a")).click();
        driver.findElement(By.cssSelector("#bc-main-content-wrapper > div > div.main-content-wrapper.content.js-main-content-wrapper > div.row > div > div > div > div:nth-child(2) > form > div:nth-child(2) > input")).sendKeys("mim.eugene@gmail.com");
        driver.findElement(By.cssSelector("#login-page-form-password")).sendKeys(<Password Removed>);
        driver.findElement(By.cssSelector("#bc-main-content-wrapper > div > div.main-content-wrapper.content.js-main-content-wrapper > div.row > div > div > div > div:nth-child(2) > form > div.form-group.text-center > button")).submit();
        new Select(driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(2) > div.bc-form > screener-load-screener-toolbar > div > screener-saved-screeners > div > select"))).selectByVisibleText("daytrade");
        driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(2) > div.bc-screener__footer > a")).click();
        //driver.findElement(By.xpath("//a[contains(text(),'See Results')]")).click();
        WebElement area = driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener.ng-isolate-scope > div:nth-child(3) > div.bc-datatable.ng-isolate-scope"));
        waitForTextToAppear(driver, "Symbol", area);
//        driver.sleep(5000);
//        wait.until(ExpectedConditions.textToBePresentInElement(By.xpath("/html/body"), "Symbol"));
    //   wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(3) > div.bc-datatable > div.throbber-wrapper.ng-hide")));
        System.out.println("Page title is: " + driver.getTitle());        // a guarantee that the test was really executed
        WebElement element1 = driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(3) > div.bc-datatable"));
        alltext = element1.getText();
        Matcher m = Pattern.compile("[A-Z]{2,}")
                .matcher(alltext);
        while (m.find()) {
            seleniumResults.add(m.group());
        }
        cleanArray(seleniumResults);
        for (int i = 0; i < seleniumResults.size(); i++) { //first row is the col names so skip it.
            m_TWS.add(seleniumResults.get(i));
        }
        driver.quit();
            }
        }.start();
    }

    public void <Website Removed>Scan(){
        new Thread() {
            @Override
            public void run() {
        seleniumResults.clear();
        //Set up Chrome Driver
        System.setProperty("webdriver.chrome.driver", "/Users/mim/developer/ErrrBot/chromedriver");
        ChromeOptions options = new ChromeOptions();
//        options.addArguments("headless");
        options.addArguments("window-size=1200x600");
        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, 15);

        //Start automation
        driver.get("https://www.<Website Removed>.com/tools/earnings/earning_today.html");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("body")));
        driver.findElement(By.cssSelector("body > table:nth-child(8) > tbody > tr:nth-child(2) > td:nth-child(2) > a:nth-child(1)")).click();
        driver.findElement(By.cssSelector("#id_username")).sendKeys("mim.eugene@gmail.com");
        driver.findElement(By.cssSelector("#id_password")).sendKeys(<Password Removed>);
        driver.findElement(By.cssSelector("#topmenu_login > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=\"image\"]")).click();
        driver.findElement(By.cssSelector("body > table:nth-child(7) > tbody > tr:nth-child(2) > td:nth-child(2) > b > a"));
        driver.findElement(By.cssSelector("#id_avg_volume")).sendKeys("250000");
        driver.findElement(By.cssSelector("#id_min_price")).sendKeys("5");
        driver.findElement(By.cssSelector("#id_earning_date")).click();
        driver.findElement(By.cssSelector("#testdiv1 > table > tbody > tr > td > center > table:nth-child(2) > tbody > tr:nth-child(8) > td > a")).click();
        driver.findElement(By.cssSelector("body > table:nth-child(8) > tbody > tr > td:nth-child(2) > div.ui-widget-content.ui-corner-all > form > table > tbody > tr:nth-child(6) > td > input")).click();
        WebElement element1 = driver.findElement(By.cssSelector("body > table:nth-child(8) > tbody > tr > td:nth-child(2) > table:nth-child(26)"));
        alltext = element1.getText();
        Matcher m = Pattern.compile("[A-Z]{2,}")
                .matcher(alltext);
        while (m.find()) {
            seleniumResults.add(m.group());
        }
        filter<Website Removed>Text(seleniumResults);
//        cleanArray(seleniumResults);
        for (int i = 0; i < seleniumResults.size(); i++) { //first row is the col names so skip it.
            m_TWS.add(seleniumResults.get(i));
        }

        m_TWS.add("made it here");
        checkEachStock();
//        driver.sleep(5000);

//        driver.findElement(By.cssSelector("#login-page-form-password")).sendKeys(<Password Removed>);

//        driver.findElement(By.cssSelector("#bc-main-content-wrapper > div > div.main-content-wrapper.content.js-main-content-wrapper > div.row > div > div > div > div:nth-child(2) > form > div:nth-child(2) > input")).sendKeys("mim.eugene@gmail.com");
//        driver.findElement(By.cssSelector("#login-page-form-password")).sendKeys(<Password Removed>);
//        driver.findElement(By.cssSelector("#bc-main-content-wrapper > div > div.main-content-wrapper.content.js-main-content-wrapper > div.row > div > div > div > div:nth-child(2) > form > div.form-group.text-center > button")).submit();
//        new Select(driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(2) > div.bc-form > screener-load-screener-toolbar > div > screener-saved-screeners > div > select"))).selectByVisibleText("daytrade");
//        driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(2) > div.bc-screener__footer > a")).click();
//        //driver.findElement(By.xpath("//a[contains(text(),'See Results')]")).click();
//        WebElement area = driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener.ng-isolate-scope > div:nth-child(3) > div.bc-datatable.ng-isolate-scope"));
//        waitForTextToAppear(driver, "Symbol", area);
////        driver.sleep(5000);
////        wait.until(ExpectedConditions.textToBePresentInElement(By.xpath("/html/body"), "Symbol"));
//    //   wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(3) > div.bc-datatable > div.throbber-wrapper.ng-hide")));
//        System.out.println("Page title is: " + driver.getTitle());        // a guarantee that the test was really executed
//        WebElement element1 = driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(3) > div.bc-datatable"));
//        alltext = element1.getText();
//        Matcher m = Pattern.compile("[A-Z]{2,}")
//                .matcher(alltext);
//        while (m.find()) {
//            seleniumResults.add(m.group());
//        }
//        cleanArray(seleniumResults);
//        for (int i = 0; i < seleniumResults.size(); i++) { //first row is the col names so skip it.
//            m_TWS.add(seleniumResults.get(i));
//        }
        driver.quit();
            }
        }.start();
    }

    public void filter<Website Removed>Text(List<String> list){
        for (int i = 0; i < bannedWords.length; i++){
            list.removeAll(Arrays.asList(bannedWords[i]));
        }
    }

    public void removeStocks(){
        for (int i = tempArray.size() -1; i > -1; i--){
            int keyLocation = tempArray.get(i);
            seleniumResults.remove(keyLocation);
        }
    }

    public void checkEachStock(){
        new Thread() {
            @Override
            public void run() {
        //Set up Chrome Driver
        System.setProperty("webdriver.chrome.driver", "/Users/mim/developer/ErrrBot/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        options.addArguments("window-size=1200x600");
        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, 15);

        for (int i = 0; i < seleniumResults.size(); i++) { //first row is the col names so skip it.
            driver.get(<Website Removed> + seleniumResults.get(i));
            if (i == 0){
                driver.findElement(By.cssSelector("body > table:nth-child(8) > tbody > tr:nth-child(2) > td:nth-child(2) > a:nth-child(1)")).click();
                driver.findElement(By.cssSelector("#id_username")).sendKeys("mim.eugene@gmail.com");
                driver.findElement(By.cssSelector("#id_password")).sendKeys(<Password Removed>);
                driver.findElement(By.cssSelector("#topmenu_login > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=\"image\"]")).click();
            }
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("body")));
            checkPercents(seleniumResults, i, driver);
        }
//        driver.quit();
            }
        }.start();
    }

    public void checkPercents(List<String> list, int index, WebDriver driver){
        //Boolean to check if 9 elements are present
        Boolean isPresent = driver.findElements(By.cssSelector("body > table:nth-child(8) > tbody > tr > td:nth-child(2) > table:nth-child(34) > tbody > tr:nth-child(13) > td:nth-child(3)")).size() > 0;
//                           {"method":"css selector","selector":"body > table:nth-child(8) > tbody > tr > td:nth-child(2) > table:nth-child(34) > tbody > tr:nth-child(13) > td:nth-child(3)"}
        if(isPresent == true){
            m_TWS.add(list.get(index) + " has max data points, calculating data");
            //for loop to grab all numbers
            int strikes = 0;
            for (int z = 0; z < 9; z++){
                int plus = z + 5;
                String datapoint = driver.findElement(By.cssSelector("body > table:nth-child(8) > tbody > tr > td:nth-child(2) > table:nth-child(34) > tbody > tr:nth-child("+ Integer.toString(plus) + ") > td:nth-child(3)")).getText();
                String checkfor = driver.findElement(By.cssSelector("body > table:nth-child(8) > tbody > tr > td:nth-child(2) > table:nth-child(34) > tbody > tr:nth-child("+ Integer.toString(plus) + ") > td:nth-child(2)")).getText();

                //check to see if "To Be Calculated After Earnings Date" is entered where data should be
                if (checkfor.contains("Earnings")){
                    m_TWS.add("Found To Be Calculated After Earnings Date bull data");
                    tempArray.add(index);
//                    list.removeAll(Arrays.asList(list.get(index)));
                    break;
                }
                if (datapoint.contains("None") || datapoint.contains("Earnings")){
                    m_TWS.add("Found NONE VALUE");

                    tempArray.add(index);
    //                  list.removeAll(Arrays.asList(list.get(index)));
                    break;
                }

                //converts string to double without the % sign and stuff.
                double datapointdouble = Double.parseDouble(datapoint.replaceAll("[^\\d-]+", ""));
                //-None%

                //Finds if recent earnings were bad, if so, removes from list.
                if (z < 4 && datapointdouble < 0){
                    m_TWS.add("Found bad earnings");
                    tempArray.add(index);
//                  list.removeAll(Arrays.asList(list.get(index)));
                    break;
                }
                //Calculate total negative earnings
                if (datapointdouble < 0){
                    strikes = strikes + 1;
                }
                //removes name from list if more that 2 strikes
                if (strikes > 2){
                    m_TWS.add("Too many strikes!");
                    tempArray.add(index);
//                    list.removeAll(Arrays.asList(list.get(index)));
                    break;
                }
            }
        }else{
              tempArray.add(index);
//            list.removeAll(Arrays.asList(list.get(index)));
            m_TWS.add(list.get(index) + " DOES NOT HAVE max data points, removing from list.");
        }
    }

    public void filteredScanSell() throws IOException {
        seleniumResultsSell.clear();
        System.setProperty("webdriver.chrome.driver", "/Users/mim/developer/ErrrBot/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        options.addArguments("window-size=1200x600");
        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, 15);

        driver.get("https://www.barchart.com/stocks/stocks-screener?viewName=filter_view");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("body")));
        driver.findElement(By.cssSelector("#bc-main-content-wrapper > div > div.main-content-wrapper.content.js-main-content-wrapper > div.row > div > div > div > div:nth-child(2) > form > div:nth-child(2) > input")).sendKeys("mim.eugene@gmail.com");
        driver.findElement(By.cssSelector("#login-page-form-password")).sendKeys(<Password Removed>);
        driver.findElement(By.cssSelector("#bc-main-content-wrapper > div > div.main-content-wrapper.content.js-main-content-wrapper > div.row > div > div > div > div:nth-child(2) > form > div.form-group.text-center > button")).submit();
        new Select(driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(2) > div.bc-form > screener-load-screener-toolbar > div > screener-saved-screeners > div > select"))).selectByVisibleText("");
//        driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(2) > div.bc-screener__footer > a")).click();
        driver.findElement(By.xpath("//a[contains(text(),'See Results')]")).click();
        WebElement area = driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener.ng-isolate-scope > div:nth-child(3) > div.bc-datatable.ng-isolate-scope"));
        waitForTextToAppear(driver, "Symbol", area);
// wait.until(ExpectedConditions.textToBePresentInElement(By.xpath("/html/body"), "Symbol"));
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(3) > div.bc-datatable > div.throbber-wrapper.ng-hide")));
        System.out.println("Page title is: " + driver.getTitle());        // a guarantee that the test was really executed
        WebElement element1 = driver.findElement(By.cssSelector("#main-content-column > div > div.bc-screener > div:nth-child(3) > div.bc-datatable"));
        alltext = element1.getText();
        Matcher m = Pattern.compile("[A-Z]{2,}")
                .matcher(alltext);
        while (m.find()) {
            seleniumResultsSell.add(m.group());
        }
        cleanArray(seleniumResultsSell);
        for (int i = 0; i < seleniumResultsSell.size(); i++) { //first row is the col names so skip it.
            m_TWS.add(seleniumResultsSell.get(i));
        }
        driver.quit();
    }

    public static List<Order> trailOrder (int parentOrderId, String action, double quantity, double limitPrice, double takeProfitLimitPrice, double stopLossPrice) {
        //This will be our main or "parent" order
        Order parent = new Order();
        parent.orderId(parentOrderId);
        parent.action(action);
        parent.orderType("LMT");
        parent.totalQuantity(quantity);
        parent.lmtPrice(limitPrice);
        AvailableAlgoParams.FillAdaptiveParams(parent, "Normal"); //Urgent Patient
        //The parent and children orders will need this attribute set to false to prevent accidental executions.
        //The LAST CHILD will have it set to true.
        parent.transmit(false);

        Order trailingStop = new Order();
        trailingStop.orderId(parent.orderId() + 2);
        trailingStop.action(action.equals("BUY") ? "SELL" : "BUY");
        trailingStop.orderType("TRAIL");
        //Stop trigger price
//        double stopLimitPrice =  ((Math.floor(limitPrice * .99) * 100) / 100);
//        trailingStop.auxPrice(stopLimitPrice);
        trailingStop.m_trailingPercent = 1;
        trailingStop.totalQuantity(quantity);
        trailingStop.parentId(parentOrderId);
        //In this case, the low side order will be the last child being sent. Therefore, it needs to set this attribute to true
        //to activate all its predecessors
        trailingStop.transmit(true);

        List<Order> bracketOrder = new ArrayList<Order>();
        bracketOrder.add(parent);
//        bracketOrder.add(takeProfit);
        bracketOrder.add(trailingStop);

        return bracketOrder;
    }

        public static List<Order> doubleBracketOrder(int parentOrderId, String action, double quantity, double limitPrice, double takeProfitLimitPrice, double stopLossPrice) {
        //This will be our main or "parent" order
        DecimalFormat ffo = new DecimalFormat(".##");


        Order parent = new Order();
        parent.orderId(parentOrderId);
        parent.action(action);
        parent.orderType("LMT");
        parent.totalQuantity(quantity);
        double limitPricePlus =  (Math.floor(limitPrice * 1.02));
        limitPricePlus = Double.parseDouble(ffo.format(limitPricePlus));
        parent.lmtPrice(limitPricePlus);
        AvailableAlgoParams.FillAdaptiveParams(parent, "Normal"); //Urgent Patient
        //The parent and children orders will need this attribute set to false to prevent accidental executions.
        //The LAST CHILD will have it set to true.
        parent.transmit(false);

        Order takeProfit = new Order();
        System.out.println("take profit order ID is " + (parent.orderId()+1));
        takeProfit.orderId(parent.orderId() + 1);
        takeProfit.action(action.equals("BUY") ? "SELL" : "BUY");
        takeProfit.orderType("LMT");
        takeProfit.totalQuantity(quantity);
        double profitPrice =  (Math.floor(limitPrice * 1.05));
        profitPrice = Double.parseDouble(ffo.format(profitPrice));
        takeProfit.lmtPrice(profitPrice);
        takeProfit.parentId(parentOrderId);
        takeProfit.transmit(false);

        Order stopLoss = new Order();
        stopLoss.orderId(parent.orderId() + 2);
        stopLoss.action(action.equals("BUY") ? "SELL" : "BUY");
        stopLoss.orderType("STP");
        stopLoss.totalQuantity(quantity);
        double stopLimitPrice =  (Math.floor(limitPrice * .97));
        stopLimitPrice = Double.parseDouble(ffo.format(stopLimitPrice));
        stopLoss.auxPrice(stopLimitPrice);
        stopLoss.parentId(parentOrderId);
        //In this case, the low side order will be the last child being sent. Therefore, it needs to set this attribute to true
        //to activate all its predecessors
        stopLoss.transmit(true);

        List<Order> bracketOrder = new ArrayList<Order>();
        bracketOrder.add(parent);
        bracketOrder.add(takeProfit);
        bracketOrder.add(stopLoss);
        System.out.println("Parent order ID is : " + (parent.orderId()));
        return bracketOrder;
    }

    public static void FillAdaptiveParams(Order baseOrder, String priority) {
        baseOrder.algoStrategy("Adaptive");
        baseOrder.algoParams(new ArrayList<>());
        baseOrder.algoParams().add(new TagValue("adaptivePriority", priority));
}



    public void testButton(){
        removeStocks();
        for (int i = 0; i < seleniumResults.size(); i++) {
            m_TWS.add("Final results are: " + seleniumResults.get(i));
        }
//        positionScan();
////        <Website Removed>Scan();
//        System.out.println("test button works");
////        <Website Removed>Scan();
//        m_client.reqAccountSummary(orderIds, "All", "TotalCashValue");
//        sleep(1000);
//        m_client.cancelAccountSummary(orderIds);
//        System.out.println(buyingPower);
//        orderIds = orderIds+1;
    }

    public void buyRecommended(){
    System.out.println("found " + seleniumResults.size() + " stocks to long");
//    System.out.println("found " + seleniumResultsSell.size() + " stocks to short");        // a guarantee that the test was really executed

    buyAllLongMarket();
//    buyAllShort();
    m_TWS.add("Bought " + buyCounter + " Stocks" );
}
//
//    public void onLiquidate() {
//        m_client.reqAccountUpdates(true, "");
//        for (int i = 0; i < contracts.size(); i++){
//        if (killArray[i] != 0){
//                    m_TWS.add("ERROR POSITIONS NOT LIQUIDATED ENTER ALERT HERE");
//                }
//        liquidate();
//        m_client.reqGlobalCancel();
//        }
//    }
//
//    public void liquidate(){
//        for (int i = 0; i < contracts.size(); i++){
//
//                m_TWS.add("inside loop" + killArray[i] + i + contracts.get(i).symbol() + contracts.size() + "orderid = " + orderIds);
//                Order ord = new Order();
//                //ord.m_orderId = orderId;
//
//                if (killArray[i] == 0){
//                    m_TWS.add("No positions to close");
//                }
//
//                else if (killArray[i] > 0) {
//                ord.m_action = "SELL";
//                }
//
//                else if (killArray[i] < 0){
//                ord.m_action = "BUY";
//                }
//
//                ord.m_orderType = "MKT";
//                ord.m_totalQuantity = killArray[i];
//                if (killArray[i] != 0){
//                    m_client.placeOrder(orderIds, contracts.get(i), ord);
//                }
//                m_TWS.add("End of Loop" + i);
//                if (killArray[i] == 0){
//                    m_TWS.add("POSITION " + contracts.get(i).symbol() + " CLOSED");
//                }
//
//                orderIds = orderIds + 1;
//    }
//}

    public void buyAllLongMarket(){
      for (int i = 0; i < seleniumResults.size(); i++){
        Contract con = new Contract();
        String symbol = seleniumResults.get(i);
        con.m_localSymbol = symbol;
        con.m_symbol = symbol;
        con.m_currency = "USD";
        con.m_exchange = "SMART";
        con.m_secType = "STK";
        Order ord = new Order();
        ord.m_orderId = orderIds;
        ord.m_action = "BUY";
        ord.m_orderType = "MKT";
        m_client.reqMktData(tickerId, con, "", true, false, mktDataOptions);
        sleep(1000);
//        testButton();
        Double quanttemp = ((double) buyingPower/seleniumResults.size());
        Double ordQuant =  new Double (quanttemp/tempPrice);
        int ordQuantConverted = ordQuant.intValue();
        ord.m_totalQuantity = ordQuantConverted;
        System.out.println("quantity is: " + ord.m_totalQuantity);
        m_client.placeOrder(orderIds, con, ord);
        sleep(1000);
        orderIds = orderIds + 1;
        tickerId = tickerId + 1;
        buyCounter = buyCounter + 1;
      }
    }

    public void buyAllLong(){
      for (int i = 0; i < seleniumResults.size(); i++){
        Contract con = new Contract();
        String symbol = seleniumResults.get(i);
        con.m_localSymbol = symbol;
        con.m_symbol = symbol;
        con.m_currency = "USD";
        con.m_exchange = "SMART";
        con.m_secType = "STK";
        Order ord = new Order();
        ord.m_orderId = orderIds;
        ord.m_action = "BUY";
        ord.m_orderType = "MKT";

        m_client.reqMktData(tickerId, con, "", true, false, mktDataOptions);

        sleep(1000);

        Double ordQuant =  new Double (10000/tempPrice);
        int ordQuantConverted = ordQuant.intValue();
        ord.m_totalQuantity = ordQuantConverted;

        double finalPrice = tempPrice * 1.005;
        finalPrice = Double.parseDouble(df.format(finalPrice));
        System.out.println("final price is : " + finalPrice);
        System.out.println("data is " + tempPrice);
        List<Order> bracketOrder = new ArrayList<Order>();
        bracketOrder = doubleBracketOrder(orderIds, "BUY", ordQuantConverted, finalPrice, (tempPrice * 1.01), (tempPrice * .99));
        for (int x =0; x < bracketOrder.size(); x++){
            m_client.placeOrder((orderIds + x), con, bracketOrder.get(x));
            sleep(500);
        }
        bracketOrder.clear();
        sleep(500);
        orderIds = orderIds + 3;
        tickerId = tickerId + 1;
        buyCounter = buyCounter + 1;
      }
    }

    public void buyAllShort(){
      for (int i = 0; i < seleniumResultsSell.size(); i++){
        Contract con2 = new Contract();
        String symbol = seleniumResultsSell.get(i);
        con2.m_localSymbol = symbol;
        con2.m_symbol = symbol;
        con2.m_currency = "USD";
        con2.m_exchange = "SMART";
        con2.m_secType = "STK";
        Order ord = new Order();
        ord.m_orderId = orderIds;
        ord.m_action = "SELL";
        ord.m_orderType = "MKT";

        m_client.reqMktData(tickerId, con2, "", true, false, mktDataOptions);

        sleep(1000);

        Double ordQuant =  new Double (10000/tempPrice);
        int ordQuantConverted = ordQuant.intValue();
        ord.m_totalQuantity = ordQuantConverted;
        System.out.println("data is " + tempPrice);
        List<Order> bracketOrder = new ArrayList<Order>();
        double finalPrice = tempPrice * .995;
        finalPrice = Double.parseDouble(df.format(finalPrice));
        System.out.println("final price is : " + finalPrice);

        bracketOrder = trailOrder(orderIds, "SELL", ordQuantConverted, (finalPrice), (tempPrice * 1.01), (tempPrice * .99));
        for (int x =0; x < bracketOrder.size(); x++){
            m_client.placeOrder((orderIds + x), con2, bracketOrder.get(x));
            sleep(500);
        }
        bracketOrder.clear();
        sleep(500);
        orderIds = orderIds + 3;
        tickerId = tickerId + 1;
        buyCounter = buyCounter + 1;
      }
    }

    public void sleep(int time){
        try {
                Thread.sleep(time);
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
        }
    }

    public void topOneScan() throws IOException {
        seleniumResults.clear();
        //System.setProperty("webdriver.chrome.driver", "/developer/ErrrBot/chromedriver");
        System.setProperty("webdriver.chrome.driver", "/developer/ErrrBot/linux/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        options.addArguments("window-size=1200x600");
        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, 15);

        driver.get("https://www.barchart.com/stocks/signals/direction-strength?viewName=main&timeFrame=current");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("body")));
        wait.until(ExpectedConditions.textToBePresentInElement(By.xpath("/html/body"), "100% Buy"));
        System.out.println("Page title is: " + driver.getTitle());        // a guarantee that the test was really executed

        WebElement element1 = driver.findElement(By.cssSelector("#main-content-column > div > div.barchart-content-block.invisible.visible > div.bc-datatable"));
        alltext = element1.getText();
        Matcher m = Pattern.compile("[A-Z]{2,}")
                .matcher(alltext);
        while (m.find()) {
            seleniumResults.add(m.group());
        }

        cleanArray(seleniumResults);


        for (int i = 0; i < seleniumResults.size(); i++) { //first row is the col names so skip it.
            System.out.println(seleniumResults.get(i));
        }
        driver.quit();
    }

    public void refreshStocks() {
        m_TWS.add("it's inside");
        currentPositions.clear();
        try {
            topOneScan();
        } catch (IOException ex) {
            Logger.getLogger(ErrrBot.class.getName()).log(Level.SEVERE, null, ex);
        }
        positionScan();

            try {
                    Thread.sleep(1500);
                 } catch(InterruptedException ex) {
                    Thread.currentThread().interrupt();
            }

        if (currentPositions.size() < seleniumResults.size()){
            for(int i=0; i< seleniumResults.size(); i++){
        	if(currentPositions.contains(seleniumResults.get(i))){
                	currentPositions.remove(seleniumResults.get(i));
                        seleniumResults.remove(i);
                }else{        	}
            }
        }else{
            for(int i=0; i< currentPositions.size(); i++){
        	if(seleniumResults.contains(currentPositions.get(i))){
                	seleniumResults.remove(currentPositions.get(i));
                        currentPositions.remove(i);
                }else{        	}
        }
        }

        buyEntireArray(seleniumResults);
        sellEntireArray(currentPositions);

        System.out.println(currentPositions.get(3));

        for (int i = 0; i < currentPositions.size(); i++) { //first row is the col names so skip it.
            System.out.println(currentPositions.get(i));
        }
    }

    public void buyEntireArray(List<String> entireArray){
        for (int i = 0; i < entireArray.size(); i++){
        Contract con = new Contract();
        String symbol = entireArray.get(i);
        con.m_localSymbol = symbol;
        con.m_symbol = symbol;
        con.m_currency = "USD";
        con.m_exchange = "SMART";
        con.m_secType = "STK";

        Order ord = new Order();
        ord.m_orderId = orderIds;
        ord.m_action = "BUY";
        ord.m_orderType = "MKT";
        ord.m_trailingPercent = 1;
        AvailableAlgoParams.FillAdaptiveParams(ord, "Normal");

        m_client.reqMktData(tickerId, con, "", true, false, mktDataOptions);

            try {
                    Thread.sleep(1500);
                 } catch(InterruptedException ex) {
                    Thread.currentThread().interrupt();
            }

        Double ordQuant =  new Double (10000/tempPrice);
        int ordQuantConverted = ordQuant.intValue();
        ord.m_totalQuantity = ordQuantConverted;

        ord.action("BUY".equals(con) ? "SELL" : "BUY");
        ord.totalQuantity(ordQuantConverted);
//        orderr.auxPrice(attachedOrderStopPrice);
        ord.parentId(orderIds);
//        When trigger price is penetrated
        ord.triggerPrice(ordQuantConverted);
        //The parent order will be turned into a TRAIL order
        ord.adjustedOrderType(OrderType.TRAIL);
        //With a stop price of...
        //trailing by and amount (0) or a percent (1)...
        ord.adjustableTrailingUnit(1);
        ord.adjustedTrailingAmount(1);

        System.out.println("data is" + tempPrice);
        if (tempPrice > 10){
            m_client.placeOrder(orderIds, con, ord);
            tickerId = tickerId + 1;
            orderIds = orderIds + 1;
            buyCounter = buyCounter + 1;
            currentPositions.add(con.m_localSymbol);
        }
        }
        m_TWS.add("Bought " + buyCounter + " Stocks" );
        }

    public void cleanArray(List<String> array){
        array.removeAll(Arrays.asList("NYSE"));
        array.removeAll(Arrays.asList("ADX"));
        array.removeAll(Arrays.asList("NASDAQ"));
        array.removeAll(Arrays.asList("AMEX"));
        array.removeAll(Arrays.asList("MACD"));


    }

    public void sellEntireArray(List<String> entireArray){
        for (int i = 0; i < entireArray.size(); i++){
        Contract con = new Contract();
        String symbol = entireArray.get(i);
        con.m_localSymbol = symbol;
        con.m_symbol = symbol;
        con.m_currency = "USD";
        con.m_exchange = "SMART";
        con.m_secType = "STK";

        Order ord = new Order();
        ord.m_orderId = orderIds;
        ord.m_action = "SELL";
        ord.m_orderType = "MKT";
        AvailableAlgoParams.FillAdaptiveParams(ord, "Normal");

            try {
                    Thread.sleep(1000);
                 } catch(InterruptedException ex) {
                    Thread.currentThread().interrupt();
            }

            ord.m_totalQuantity = tempPosition;
            m_client.placeOrder(orderIds, con, ord);
            tickerId = tickerId + 1;
            orderIds = orderIds + 1;
            buyCounter = buyCounter + 1;
            currentPositions.remove(con.m_localSymbol);
        }
        m_TWS.add("Sold " + buyCounter + " Stocks" );
        }

    public void positionScan(){
        positionSwitch = true;
        onRequestPositions();
    }

    private void onRequestPositions() {
        m_client.reqPositions();
    }

    private void onCancelPositions() {
        m_client.cancelPositions();
    }

    public void tickPrice( int tickerId, int field, double price, TickAttr attribs) {
        // received price tick
        tempPrice = price;
        System.out.println("temprice set to " + tempPrice);
    	String msg = EWrapperMsgGenerator.tickPrice( tickerId, field, price, attribs);
        m_tickers.add( msg );
    }

    public void tickOptionComputation( int tickerId, int field, double impliedVol, double delta, double optPrice, double pvDividend,
        double gamma, double vega, double theta, double undPrice) {
        // received computation tick
        String msg = EWrapperMsgGenerator.tickOptionComputation( tickerId, field, impliedVol, delta, optPrice, pvDividend,
            gamma, vega, theta, undPrice);
        m_tickers.add( msg );
    }

    public void tickSize( int tickerId, int field, int size) {
        // received size tick
    	String msg = EWrapperMsgGenerator.tickSize( tickerId, field, size);
        m_tickers.add( msg);
    }

    public void tickGeneric( int tickerId, int tickType, double value) {
        // received generic tick
    	String msg = EWrapperMsgGenerator.tickGeneric(tickerId, tickType, value);
        m_tickers.add( msg);
    }

    public void tickString( int tickerId, int tickType, String value) {
        // received String tick
    	String msg = EWrapperMsgGenerator.tickString(tickerId, tickType, value);
        m_tickers.add( msg);
    }

    public void tickSnapshotEnd(int tickerId) {
    	String msg = EWrapperMsgGenerator.tickSnapshotEnd(tickerId);
    	m_tickers.add( msg) ;
    }

    public void tickEFP(int tickerId, int tickType, double basisPoints, String formattedBasisPoints,
    					double impliedFuture, int holdDays, String futureLastTradeDate, double dividendImpact,
    					double dividendsToLastTradeDate) {
        // received EFP tick
    	String msg = EWrapperMsgGenerator.tickEFP(tickerId, tickType, basisPoints, formattedBasisPoints,
				impliedFuture, holdDays, futureLastTradeDate, dividendImpact, dividendsToLastTradeDate);
        m_tickers.add(msg);
    }

    public void orderStatus( int orderId, String status, double filled, double remaining,
    						 double avgFillPrice, int permId, int parentId,
    						 double lastFillPrice, int clientId, String whyHeld, double mktCapPrice) {
        // received order status
    	String msg = EWrapperMsgGenerator.orderStatus( orderId, status, filled, remaining,
    	        avgFillPrice, permId, parentId, lastFillPrice, clientId, whyHeld, mktCapPrice);
        m_TWS.add(  msg);

        // make sure id for next order is at least orderId+1
        m_orderDlg.setIdAtLeast( orderId + 1);
    }

    public void openOrder( int orderId, Contract contract, Order order, OrderState orderState) {
        // received open order
    	String msg = EWrapperMsgGenerator.openOrder( orderId, contract, order, orderState);
        timeDelay = new SimpleDateFormat("mm").format(Calendar.getInstance().getTime());
        m_TWS.add( msg) ;
    }

    public void openOrderEnd() {
        // received open order end
    	String msg = EWrapperMsgGenerator.openOrderEnd();
        m_TWS.add( msg) ;
    }

    public void contractDetails(int reqId, ContractDetails contractDetails) {
        ContractDetailsCallback callback;
        synchronized (m_callbackMap) {
            callback = m_callbackMap.get(reqId);
        }
    	if (callback != null) {
    		callback.onContractDetails(contractDetails);
    	}

    	String msg = EWrapperMsgGenerator.contractDetails( reqId, contractDetails);
    	m_TWS.add(msg);
    }

	public void contractDetailsEnd(int reqId) {
        ContractDetailsCallback callback;
        synchronized (m_callbackMap) {
            callback = m_callbackMap.get(reqId);
        }
    	if (callback != null) {
    		callback.onContractDetailsEnd();
    	}

    	String msg = EWrapperMsgGenerator.contractDetailsEnd(reqId);
		m_TWS.add(msg);
	}

    public void scannerData(int reqId, int rank, ContractDetails contractDetails,
                            String distance, String benchmark, String projection, String legsStr) {
    	String msg = EWrapperMsgGenerator.scannerData(reqId, rank, contractDetails, distance,
    			benchmark, projection, legsStr);
        m_tickers.add(msg);
    }

    public void scannerDataEnd(int reqId) {
    	String msg = EWrapperMsgGenerator.scannerDataEnd(reqId);
    	m_tickers.add(msg);
    }

    public void bondContractDetails(int reqId, ContractDetails contractDetails)
    {
    	String msg = EWrapperMsgGenerator.bondContractDetails( reqId, contractDetails);
    	m_TWS.add(msg);
    }

    public void execDetails(int reqId, Contract contract, Execution execution)
    {
    	String msg = EWrapperMsgGenerator.execDetails(reqId, contract, execution);
    	m_TWS.add(msg);
    }

    public void execDetailsEnd(int reqId)
    {
    	String msg = EWrapperMsgGenerator.execDetailsEnd(reqId);
    	m_TWS.add(msg);
    }

    public void updateMktDepth( int tickerId, int position, int operation,
                    int side, double price, int size) {

        MktDepthDlg depthDialog = m_mapRequestToMktDepthDlg.get(tickerId);
        if ( depthDialog != null ) {
            depthDialog.updateMktDepth( tickerId, position, "", operation, side, price, size);
        } else {
            System.err.println("cannot find dialog that corresponds to request id ["+tickerId+"]");
        }


    }

    public void updateMktDepthL2( int tickerId, int position, String marketMaker,
                    int operation, int side, double price, int size) {
        MktDepthDlg depthDialog = m_mapRequestToMktDepthDlg.get(tickerId);
        if ( depthDialog != null ) {
            depthDialog.updateMktDepth( tickerId, position, marketMaker, operation, side, price, size);
        } else {
            System.err.println("cannot find dialog that corresponds to request id ["+tickerId+"]");
        }
    }

    public void nextValidId( int orderId) {
        // received next valid order id
    	String msg = EWrapperMsgGenerator.nextValidId( orderId);
        m_TWS.add(msg) ;
        orderIds = orderId;
        m_orderDlg.setIdAtLeast( orderId);
    }

    public void error(Exception ex) {
        // do not report exceptions if we initiated disconnect
        if (!m_disconnectInProgress) {
            String msg = EWrapperMsgGenerator.error(ex);
            Main.inform( this, msg);
        }
    }

    public void error( String str) {
    	String msg = EWrapperMsgGenerator.error(str);
        m_errors.add( msg);
    }

    public void error( int id, int errorCode, String errorMsg) {
        // received error
        final ContractDetailsCallback callback;
        synchronized (m_callbackMap) {
            callback = m_callbackMap.get(id);
        }
    	if (callback != null) {
    		callback.onError(errorCode, errorMsg);
    	} else if (id == -1) {
            final Collection<ContractDetailsCallback> callbacks;
            synchronized (m_callbackMap) {
                callbacks = new ArrayList<>(m_callbackMap.size());
                callbacks.addAll(m_callbackMap.values());
            }
            for (final ContractDetailsCallback cb : callbacks) {
                cb.onError(errorCode, errorMsg);
            }
    	}

    	String msg = EWrapperMsgGenerator.error(id, errorCode, errorMsg);
        m_errors.add( msg);
        for (int faErrorCode : faErrorCodes) {
            faError |= (errorCode == faErrorCode);
        }
        if (errorCode == MktDepthDlg.MKT_DEPTH_DATA_RESET) {

            MktDepthDlg depthDialog = m_mapRequestToMktDepthDlg.get(id);
            if ( depthDialog != null ) {
                depthDialog.reset();
            } else {
                System.err.println("cannot find dialog that corresponds to request id ["+id+"]");
            }
        }
    }

    public void connectionClosed() {
        String msg = EWrapperMsgGenerator.connectionClosed();
        Main.inform( this, msg);
    }

    public void updateAccountValue(String key, String value,
                                   String currency, String accountName) {
        m_acctDlg.updateAccountValue(key, value, currency, accountName);
    }

    public void updatePortfolio(Contract contract, double position, double marketPrice,
        double marketValue, double averageCost, double unrealizedPNL, double realizedPNL,
        String accountName) {
        tempPosition = position;
        currentPositions.add(contract.m_localSymbol);
        m_acctDlg.updatePortfolio(contract, position, marketPrice, marketValue,
            averageCost, unrealizedPNL, realizedPNL, accountName);
    }

    public void updateAccountTime(String timeStamp) {
        m_acctDlg.updateAccountTime(timeStamp);
    }

    public void accountDownloadEnd(String accountName) {
    	m_acctDlg.accountDownloadEnd( accountName);

    	String msg = EWrapperMsgGenerator.accountDownloadEnd( accountName);
        m_TWS.add( msg);
    }

    public void updateNewsBulletin( int msgId, int msgType, String message, String origExchange) {
        String msg = EWrapperMsgGenerator.updateNewsBulletin(msgId, msgType, message, origExchange);
        JOptionPane.showMessageDialog(this, msg, "IB News Bulletin", JOptionPane.INFORMATION_MESSAGE);
    }

    public void managedAccounts( String accountsList) {
        m_bIsFAAccount = true;
        m_FAAcctCodes = accountsList;
        String msg = EWrapperMsgGenerator.managedAccounts(accountsList);
        m_TWS.add( msg);
    }

    public void historicalData(int reqId, Bar bar) {
        String msg = EWrapperMsgGenerator.historicalData(reqId, bar.time(), bar.open(), bar.high(), bar.low(), bar.close(), bar.volume(), bar.count(), bar.wap());
    	m_tickers.add( msg );
    }

    public void historicalDataEnd(int reqId, String startDate, String endDate) {
    	String msg = EWrapperMsgGenerator.historicalDataEnd(reqId, startDate, endDate);
    	m_tickers.add( msg );
    }

	public void realtimeBar(int reqId, long time, double open, double high, double low, double close, long volume, double wap, int count) {
		String msg = EWrapperMsgGenerator.realtimeBar(reqId, time, open, high, low, close, volume, wap, count);
        m_tickers.add( msg );
	}
    public void scannerParameters(String xml) {
        displayXML(EWrapperMsgGenerator.SCANNER_PARAMETERS, xml);
    }

	public void currentTime(long time) {
		String msg = EWrapperMsgGenerator.currentTime(time);
    	m_TWS.add(msg);
	}
	public void fundamentalData(int reqId, String data) {
		String msg = EWrapperMsgGenerator.fundamentalData(reqId, data);
		m_tickers.add(msg);
	}
	public void deltaNeutralValidation(int reqId, DeltaNeutralContract deltaNeutralContract) {
		String msg = EWrapperMsgGenerator.deltaNeutralValidation(reqId, deltaNeutralContract);
		m_TWS.add(msg);
	}

    private void displayXML(String title, String xml) {
        m_TWS.add(title);
        m_TWS.addText(xml);
    }

    public void receiveFA(int faDataType, String xml) {
        displayXML(EWrapperMsgGenerator.FINANCIAL_ADVISOR + " " + EClientSocket.faMsgTypeName(faDataType), xml);
        switch (faDataType) {
            case EClientSocket.GROUPS:
                faGroupXML = xml;
                break;
            case EClientSocket.PROFILES:
                faProfilesXML = xml;
                break;
            case EClientSocket.ALIASES:
                faAliasesXML = xml;
                break;
            default:
                return;
      }

      if (!faError &&
          !(faGroupXML == null || faProfilesXML == null || faAliasesXML == null)) {
          FinancialAdvisorDlg dlg = new FinancialAdvisorDlg(this);
          dlg.receiveInitialXML(faGroupXML, faProfilesXML, faAliasesXML);
          dlg.setVisible(true);

          if (!dlg.m_rc) {
            return;
          }

          m_client.replaceFA( EClientSocket.GROUPS, dlg.groupsXML );
          m_client.replaceFA( EClientSocket.PROFILES, dlg.profilesXML );
          m_client.replaceFA( EClientSocket.ALIASES, dlg.aliasesXML );

      }
    }

    public void marketDataType(int reqId, int marketDataType) {
        String msg = EWrapperMsgGenerator.marketDataType(reqId, marketDataType);
        m_tickers.add(msg);
    }

    public void commissionReport(CommissionReport commissionReport) {
        String msg = EWrapperMsgGenerator.commissionReport(commissionReport);
        m_TWS.add(msg);
    }

    private static void copyExtendedOrderDetails( Order destOrder, Order srcOrder) {
        destOrder.tif(srcOrder.getTif());
        destOrder.activeStartTime(srcOrder.activeStartTime());
        destOrder.activeStopTime(srcOrder.activeStopTime());
        destOrder.ocaGroup(srcOrder.ocaGroup());
        destOrder.ocaType(srcOrder.getOcaType());
        destOrder.openClose(srcOrder.openClose());
        destOrder.origin(srcOrder.origin());
        destOrder.orderRef(srcOrder.orderRef());
        destOrder.transmit(srcOrder.transmit());
        destOrder.parentId(srcOrder.parentId());
        destOrder.blockOrder(srcOrder.blockOrder());
        destOrder.sweepToFill(srcOrder.sweepToFill());
        destOrder.displaySize(srcOrder.displaySize());
        destOrder.triggerMethod(srcOrder.getTriggerMethod());
        destOrder.outsideRth(srcOrder.outsideRth());
        destOrder.hidden(srcOrder.hidden());
        destOrder.discretionaryAmt(srcOrder.discretionaryAmt());
        destOrder.goodAfterTime(srcOrder.goodAfterTime());
        destOrder.shortSaleSlot(srcOrder.shortSaleSlot());
        destOrder.designatedLocation(srcOrder.designatedLocation());
        destOrder.exemptCode(srcOrder.exemptCode());
        destOrder.ocaType(srcOrder.getOcaType());
        destOrder.rule80A(srcOrder.getRule80A());
        destOrder.allOrNone(srcOrder.allOrNone());
        destOrder.minQty(srcOrder.minQty());
        destOrder.percentOffset(srcOrder.percentOffset());
        destOrder.eTradeOnly(srcOrder.eTradeOnly());
        destOrder.firmQuoteOnly(srcOrder.firmQuoteOnly());
        destOrder.nbboPriceCap(srcOrder.nbboPriceCap());
        destOrder.optOutSmartRouting(srcOrder.optOutSmartRouting());
        destOrder.auctionStrategy(srcOrder.auctionStrategy());
        destOrder.startingPrice(srcOrder.startingPrice());
        destOrder.stockRefPrice(srcOrder.stockRefPrice());
        destOrder.delta(srcOrder.delta());
        destOrder.stockRangeLower(srcOrder.stockRangeLower());
        destOrder.stockRangeUpper(srcOrder.stockRangeUpper());
        destOrder.overridePercentageConstraints(srcOrder.overridePercentageConstraints());
        destOrder.volatility(srcOrder.volatility());
        destOrder.volatilityType(srcOrder.getVolatilityType());
        destOrder.deltaNeutralOrderType(srcOrder.getDeltaNeutralOrderType());
        destOrder.deltaNeutralAuxPrice(srcOrder.deltaNeutralAuxPrice());
        destOrder.deltaNeutralConId(srcOrder.deltaNeutralConId());
        destOrder.deltaNeutralSettlingFirm(srcOrder.deltaNeutralSettlingFirm());
        destOrder.deltaNeutralClearingAccount(srcOrder.deltaNeutralClearingAccount());
        destOrder.deltaNeutralClearingIntent(srcOrder.deltaNeutralClearingIntent());
        destOrder.deltaNeutralOpenClose(srcOrder.deltaNeutralOpenClose());
        destOrder.deltaNeutralShortSale(srcOrder.deltaNeutralShortSale());
        destOrder.deltaNeutralShortSaleSlot(srcOrder.deltaNeutralShortSaleSlot());
        destOrder.deltaNeutralDesignatedLocation(srcOrder.deltaNeutralDesignatedLocation());
        destOrder.continuousUpdate(srcOrder.continuousUpdate());
        destOrder.referencePriceType(srcOrder.getReferencePriceType());
        destOrder.trailStopPrice(srcOrder.trailStopPrice());
        destOrder.trailingPercent(srcOrder.trailingPercent());
        destOrder.scaleInitLevelSize(srcOrder.scaleInitLevelSize());
        destOrder.scaleSubsLevelSize(srcOrder.scaleSubsLevelSize());
        destOrder.scalePriceIncrement(srcOrder.scalePriceIncrement());
        destOrder.scalePriceAdjustValue(srcOrder.scalePriceAdjustValue());
        destOrder.scalePriceAdjustInterval(srcOrder.scalePriceAdjustInterval());
        destOrder.scaleProfitOffset(srcOrder.scaleProfitOffset());
        destOrder.scaleAutoReset(srcOrder.scaleAutoReset());
        destOrder.scaleInitPosition(srcOrder.scaleInitPosition());
        destOrder.scaleInitFillQty(srcOrder.scaleInitFillQty());
        destOrder.scaleRandomPercent(srcOrder.scaleRandomPercent());
        destOrder.scaleTable(srcOrder.scaleTable());
        destOrder.hedgeType(srcOrder.getHedgeType());
        destOrder.hedgeParam(srcOrder.hedgeParam());
        destOrder.account(srcOrder.account());
        destOrder.modelCode(srcOrder.modelCode());
        destOrder.settlingFirm(srcOrder.settlingFirm());
        destOrder.clearingAccount(srcOrder.clearingAccount());
        destOrder.clearingIntent(srcOrder.clearingIntent());
        destOrder.solicited(srcOrder.solicited());
        destOrder.randomizePrice(srcOrder.randomizePrice());
        destOrder.randomizeSize(srcOrder.randomizeSize());
        destOrder.mifid2DecisionMaker(srcOrder.mifid2DecisionMaker());
        destOrder.mifid2DecisionAlgo(srcOrder.mifid2DecisionAlgo());
        destOrder.mifid2ExecutionTrader(srcOrder.mifid2ExecutionTrader());
        destOrder.mifid2ExecutionAlgo(srcOrder.mifid2ExecutionAlgo());
        destOrder.dontUseAutoPriceForHedge(srcOrder.dontUseAutoPriceForHedge());
    }

    public void position(String account, Contract contract, double pos, double avgCost) {
        String msg = EWrapperMsgGenerator.position(account, contract, pos, avgCost);
        m_TWS.add(msg);
        if ((pos > 0) && (positionSwitch == true)){
            newliquidate(contract.symbol(), pos);
        }
    }

    public void newliquidate(String symbol, double amount)    {
        timeNow = new SimpleDateFormat("mm").format(Calendar.getInstance().getTime());
        int timeNowInt = Integer.parseInt(timeNow);
        int timeDelayInt = Integer.parseInt(timeDelay);

        if ((timeNowInt != timeDelayInt) && (timeNowInt +1 != timeDelayInt)){
            if (amount > 0){
                Contract con2 = new Contract();
                con2.m_localSymbol = symbol;
                con2.m_symbol = symbol;
                con2.m_currency = "USD";
                con2.m_exchange = "SMART";
                con2.m_secType = "STK";
                Order ord = new Order();
                ord.m_orderId = orderIds;
                ord.m_action = "SELL";
                ord.m_orderType = "MKT";
                sleep(1000);

                ord.m_totalQuantity = amount;
                m_client.placeOrder((orderIds+1), con2, ord);
                sleep(500);
                orderIds = orderIds + 1;
                tickerId = tickerId + 1;
                buyCounter = buyCounter + 1;
            }
        }
        if (timeNow.equals(timeDelay)){
            System.out.println("JUST BOUGHT SOMETHING!!! NOT SELLING!!");
        }
      }

    public void positionEnd() {
        String msg = EWrapperMsgGenerator.positionEnd();
        m_TWS.add(msg);
    }

    public void accountSummary( int reqId, String account, String tag, String value, String currency) {
        String msg = EWrapperMsgGenerator.accountSummary(reqId, account, tag, value, currency);
        double tempDouble = Double.parseDouble(value);
        buyingPower = (int) tempDouble;
        m_TWS.add(msg);
    }

    public void accountSummaryEnd( int reqId) {
        String msg = EWrapperMsgGenerator.accountSummaryEnd(reqId);
        m_TWS.add(msg);
    }

    public void positionMulti( int reqId, String account, String modelCode, Contract contract, double pos, double avgCost) {
        String msg = EWrapperMsgGenerator.positionMulti(reqId, account, modelCode, contract, pos, avgCost);
        m_TWS.add(msg);
    }

    public void positionMultiEnd( int reqId) {
        String msg = EWrapperMsgGenerator.positionMultiEnd(reqId);
        m_TWS.add(msg);
    }

    public void accountUpdateMulti( int reqId, String account, String modelCode, String key, String value, String currency) {
        String msg = EWrapperMsgGenerator.accountUpdateMulti(reqId, account, modelCode, key, value, currency);
        m_TWS.add(msg);
    }

    public void accountUpdateMultiEnd( int reqId) {
        String msg = EWrapperMsgGenerator.accountUpdateMultiEnd(reqId);
        m_TWS.add(msg);
    }

    public void verifyMessageAPI( String apiData) { /* Empty */ }
    public void verifyCompleted( boolean isSuccessful, String errorText) { /* Empty */ }
    public void verifyAndAuthMessageAPI( String apiData, String xyzChallenge) { /* Empty */ }
    public void verifyAndAuthCompleted( boolean isSuccessful, String errorText) { /* Empty */ }

    public void displayGroupList( int reqId, String groups) {
        m_groupsDlg.displayGroupList(reqId, groups);
    }

    public void displayGroupUpdated( int reqId, String contractInfo) {
        m_groupsDlg.displayGroupUpdated(reqId, contractInfo);
    }

	public void connectAck() {
		if (m_client.isAsyncEConnect())
			m_client.startAPI();
	}

	@Override
	public void securityDefinitionOptionalParameter(int reqId, String exchange, int underlyingConId, String tradingClass,
			String multiplier, Set<String> expirations, Set<Double> strikes) {
		String msg = EWrapperMsgGenerator.securityDefinitionOptionalParameter(reqId, exchange, underlyingConId, tradingClass, multiplier, expirations, strikes);
		m_TWS.add(msg);
	}

	@Override
	public void securityDefinitionOptionalParameterEnd(int reqId) {
	}

	@Override
	public void softDollarTiers(int reqId, SoftDollarTier[] tiers) {
		String msg = EWrapperMsgGenerator.softDollarTiers(tiers);

		m_TWS.add(msg);
	}

    @Override
    public void familyCodes(FamilyCode[] familyCodes) {
        String msg = EWrapperMsgGenerator.familyCodes(familyCodes);
        m_TWS.add(msg);
    }

    @Override
    public void symbolSamples(int reqId, ContractDescription[] contractDescriptions) {
        String msg = EWrapperMsgGenerator.symbolSamples(reqId, contractDescriptions);
        m_TWS.add(msg);
    }

	@Override
	public void mktDepthExchanges(DepthMktDataDescription[] depthMktDataDescriptions) {
		String msg = EWrapperMsgGenerator.mktDepthExchanges(depthMktDataDescriptions);
		m_TWS.add(msg);
	}

	@Override
	public void tickNews(int tickerId, long timeStamp, String providerCode, String articleId, String headline, String extraData) {
		String msg = EWrapperMsgGenerator.tickNews(tickerId, timeStamp, providerCode, articleId, headline, extraData);
		m_TWS.add(msg);
	}

	@Override
	public void smartComponents(int reqId, Map<Integer, Entry<String, Character>> theMap) {
		String msg = EWrapperMsgGenerator.smartComponents(reqId, theMap);

		m_TWS.add(msg);
	}

	@Override
	public void tickReqParams(int tickerId, double minTick, String bboExchange, int snapshotPermissions) {
		String msg = EWrapperMsgGenerator.tickReqParams(tickerId, minTick, bboExchange, snapshotPermissions);

		m_tickers.add(msg);
	}

	@Override
	public void newsProviders(NewsProvider[] newsProviders) {
		String msg = EWrapperMsgGenerator.newsProviders(newsProviders);
		m_TWS.add(msg);
	}

	@Override
	public void newsArticle(int requestId, int articleType, String articleText) {
		String msg = EWrapperMsgGenerator.newsArticle(requestId, articleType, articleText);
		m_TWS.add(msg);
		if (articleType == 1) {
			String path = m_newsArticleDlg.m_retPath;
			try {
				byte[] bytes = Base64.getDecoder().decode(articleText);
				FileOutputStream fos = new FileOutputStream(path);
				fos.write(bytes);
				fos.close();
				m_TWS.add("Binary/pdf article was saved to " + path);
			} catch (IOException ex) {
				m_TWS.add("Binary/pdf article was not saved to " + path + " due to error: " + ex.getMessage());
			}
		}
	}

	@Override
	public void historicalNews(int requestId, String time, String providerCode, String articleId, String headline) {
		String msg = EWrapperMsgGenerator.historicalNews(requestId, time, providerCode, articleId, headline);
		m_TWS.add(msg);
	}

	@Override
	public void historicalNewsEnd(int requestId, boolean hasMore) {
		String msg = EWrapperMsgGenerator.historicalNewsEnd(requestId, hasMore);
		m_TWS.add(msg);
	}

	@Override
	public void headTimestamp(int reqId, String headTimestamp) {
		String msg = EWrapperMsgGenerator.headTimestamp(reqId, headTimestamp);

		m_TWS.add(msg);
	}

	@Override
	public void histogramData(int reqId, List<HistogramEntry> items) {
		String msg = EWrapperMsgGenerator.histogramData(reqId, items);

		m_TWS.add(msg);
	}

    @Override
    public void historicalDataUpdate(int reqId, Bar bar) {
        historicalData(reqId, bar);
    }

	@Override
	public void rerouteMktDataReq(int reqId, int conId, String exchange) {
		String msg = EWrapperMsgGenerator.rerouteMktDataReq(reqId, conId, exchange);

		m_TWS.add(msg);
	}

	@Override
	public void rerouteMktDepthReq(int reqId, int conId, String exchange) {
		String msg = EWrapperMsgGenerator.rerouteMktDepthReq(reqId, conId, exchange);

		m_TWS.add(msg);
	}

	@Override
	public void marketRule(int marketRuleId, PriceIncrement[] priceIncrements) {
		String msg = EWrapperMsgGenerator.marketRule(marketRuleId, priceIncrements);

		m_TWS.add(msg);
	}

    @Override
    public void pnl(int reqId, double dailyPnL, double unrealizedPnL, double realizedPnL) {
        String msg = EWrapperMsgGenerator.pnl(reqId, dailyPnL, unrealizedPnL, realizedPnL);

        m_TWS.add(msg);
    }

    @Override
    public void pnlSingle(int reqId, int pos, double dailyPnL, double unrealizedPnL, double realizedPnL, double value) {
        String msg = EWrapperMsgGenerator.pnlSingle(reqId, pos, dailyPnL, unrealizedPnL, realizedPnL, value);

        m_TWS.add(msg);
    }

    @Override
    public void historicalTicks(int reqId, List<HistoricalTick> ticks, boolean last) {
        StringBuilder msg = new StringBuilder();

        for (HistoricalTick tick : ticks) {
            msg.append(EWrapperMsgGenerator.historicalTick(reqId, tick.time(), tick.price(), tick.size()));
            msg.append("\n");
        }

        m_TWS.add(msg.toString());
    }

    @Override
    public void historicalTicksBidAsk(int reqId, List<HistoricalTickBidAsk> ticks, boolean done) {
        StringBuilder msg = new StringBuilder();

        for (HistoricalTickBidAsk tick : ticks) {
            msg.append(EWrapperMsgGenerator.historicalTickBidAsk(reqId, tick.time(), tick.mask(), tick.priceBid(), tick.priceAsk(), tick.sizeBid(),
                    tick.sizeAsk()));
            msg.append("\n");
        }

        m_TWS.add(msg.toString());
    }


    @Override
    public void historicalTicksLast(int reqId, List<HistoricalTickLast> ticks, boolean done) {
        StringBuilder msg = new StringBuilder();

        for (HistoricalTickLast tick : ticks) {
            msg.append(EWrapperMsgGenerator.historicalTickLast(reqId, tick.time(), tick.mask(), tick.price(), tick.size(), tick.exchange(),
                    tick.specialConditions()));
            msg.append("\n");
        }

        m_TWS.add(msg.toString());
    }

    @Override
    public void tickByTickAllLast(int reqId, int tickType, long time, double price, int size, TickAttr attribs,
            String exchange, String specialConditions) {
        String msg = EWrapperMsgGenerator.tickByTickAllLast(reqId, tickType, time, price, size, attribs, exchange, specialConditions);

        m_tickers.add(msg);
    }

    @Override
    public void tickByTickBidAsk(int reqId, long time, double bidPrice, double askPrice, int bidSize, int askSize,
            TickAttr attribs) {
        String msg = EWrapperMsgGenerator.tickByTickBidAsk(reqId, time, bidPrice, askPrice, bidSize, askSize, attribs);

        m_tickers.add(msg);
    }

    @Override
    public void tickByTickMidPoint(int reqId, long time, double midPoint) {
        String msg = EWrapperMsgGenerator.tickByTickMidPoint(reqId, time, midPoint);

        m_tickers.add(msg);
    }
}
