let TEST_DATA_PATH;
if (window.location.hostname === 'localhost') {
    TEST_DATA_PATH = "/test/mock";
} else {
    TEST_DATA_PATH = "/pro/react-data-system/test/mock";
}

export default {
    TABLEDATA: TEST_DATA_PATH + "/tableData.json",
    REGISTRTDATA: TEST_DATA_PATH + "/registerData.json",
}