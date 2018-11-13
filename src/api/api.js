let TEST_DATA_PATH;
if (window.location.hostname === 'localhost') {
    TEST_DATA_PATH = "/test/mock";
} else {
    TEST_DATA_PATH = "/pro/react-data-system/test/mock";
}

export const api = {
    //示例表格数据
    TABLEDATA: TEST_DATA_PATH + "/tableData.json",
    //注册页数据
    REGISTRTDATA: TEST_DATA_PATH + "/registerData.json",
    //折线图表数据
    CHARTDATA: TEST_DATA_PATH + "/chartData.json",
}