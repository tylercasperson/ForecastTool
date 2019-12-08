DROP DATABASE IF EXISTS RunFourDB;
CREATE DATABASE RunFourDB;

INSERT INTO Category (MainCategory, SubCateogry, CategoryDescription) Values ("Spotify", "Rock", "Rock music on Spotify");
INSERT INTO Category (MainCategory, SubCateogry, CategoryDescription) Values ("Spotify", "Classical", "Classical music on Spotify");
INSERT INTO Category (MainCategory, SubCateogry, CategoryDescription) Values ("Computers", "Gaming Computers", "Gaming computers on Amazon");
INSERT INTO Category (MainCategory, SubCateogry, CategoryDescription) Values ("Computers", "Business Computers", "Business computers on Amazon");
INSERT INTO Category (MainCategory, SubCateogry, CategoryDescription) Values ("Computers", "Laptops", "Laptops being sold on Amazon");

INSERT INTO DataType (DataDescription) VALUES ("Revenue");
INSERT INTO DataType (DataDescription) VALUES ("Expense");

INSERT INTO ForecastMethod (Method, MethodDescription, Formula, ForecastToActual) VALUES ("Regression", "Regression", "Even split");
INSERT INTO ForecastMethod (Method, MethodDescription, Formula, ForecastToActual) VALUES ("Weighted Average", "((P1*3)+(P2*2)+(P3*1))/6)", "Even split");

INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (1, 1, 2017, "[30125, 16384, 29171, 26170, 26298, 19344, 12607, 32339, 21564, 21662, 30132, 28339]", "[27745, 37457, 26738, 10051, 38475, 19518, 22854, 28481, 34100, 27765, 15993, 20902]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (1, 2, 2017, "[15665, 11141, 14294, 14655, 19198, 12767, 8699, 16170, 13585, 12131, 20188, 15303]", "[19144, 26594, 18984, 7739, 18853, 13858, 11656, 15380, 19437, 18603, 10715, 16513]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (1, 1, 2018, "[39433, 14436, 29430, 19670, 13365, 36270, 12907, 21013, 23418, 14288, 39533, 12652]", "[35879, 18865, 16409, 14430, 33776, 34801, 33745, 34966, 36706, 16530, 16671, 24713]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (1, 2, 2018, "[22871, 8517, 15598, 14556, 8153, 29379, 6195, 10717, 14988, 7001, 19767, 8350]", "[19016, 9998, 10830, 9235, 25332, 23665, 18897, 23427, 28631, 9257, 8002, 14828]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (1, 1, 2019, "[22646, 36667, 39868, 16676, 32682, 12586, 16680, 22228, 24968, 10894, 31707, 28532]", "[20756, 27603, 33310, 34328, 12203, 27563, 30746, 25122, 31269, 22250, 39397, 24552]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (1, 2, 2019, "[14946, 25300, 19137, 12007, 25492, 10069, 8340, 11114, 17727, 8606, 19658, 20543]", "[10586, 14078, 19653, 20940, 9640, 17089, 19370, 14571, 21888, 12238, 18517, 12276]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (2, 1, 2018, "[29937, 31970, 23568, 21711, 27802, 28973, 17897, 17710, 23224, 19026, 33603, 12013]", "[33700, 34497, 18516, 24365, 24772, 24250, 37247, 14995, 31153, 22519, 32404, 31039]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (2, 2, 2018, "[17064, 15026, 11313, 11941, 18349, 19702, 11812, 13814, 19044, 13508, 19826, 9610]", "[26286, 28288, 12035, 11695, 16102, 15520, 22721, 8697, 19315, 15088, 21711, 21107]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (2, 1, 2019, "[11252, 39338, 24165, 30053, 19146, 38425, 30400, 36820, 10568, 19975, 31637, 27105]", "[26338, 35958, 21379, 34119, 29266, 31664, 31292, 11276, 27236, 36032, 36563, 37625]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (2, 2, 2019, "[20670, 22791, 6781, 17958, 14673, 10547, 23236, 13161, 9945, 28402, 19028, 19225]", "[13959, 21215, 16034, 26954, 23413, 21215, 19088, 8795, 19882, 27384, 24863, 27466]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (3, 1, 2019, "[18451, 35113, 18683, 32362, 10588, 14630, 19461, 29718, 12741, 23282, 21273, 13958]", "[13043, 14922, 35004, 17464, 17057, 33517, 22265, 27901, 23525, 11338, 35055, 39638]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (3, 2, 2019, "[11440, 26686, 9342, 22006, 5188, 10534, 10509, 16048, 7262, 15832, 14678, 8933]", "[9913, 10744, 24503, 13797, 10405, 19440, 14250, 20089, 13174, 6463, 22435, 22990]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (4, 1, 2019, "[12758, 12301, 34522, 35477, 21565, 10914, 25041, 19206, 20062, 13346, 22265, 13392]", "[19759, 33382, 24695, 32603, 10998, 28161, 15176, 30766, 13159, 37056, 38115, 38621]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (4, 2, 2019, "[7017, 8734, 24856, 19158, 12076, 7858, 16527, 13444, 15448, 8675, 18257, 7500]", "[9880, 17025, 13335, 20866, 6929, 20276, 10168, 23997, 6974, 21492, 19820, 27035]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (5, 1, 2019, "[26977, 14050, 23790, 38642, 20557, 30104, 26806, 20578, 14563, 16299, 39720, 39545]", "[12343, 20036, 15862, 38202, 15406, 26448, 36855, 24558, 16255, 15645, 25452, 18102]");
INSERT INTO SalesHistory (CategoryID, DataTypeID, CategoryYear, SalesData, ForecastData) Values (5, 2, 2019, "[19693, 7306, 12609, 25890, 14390, 22578, 20105, 11524, 9175, 12224, 28201, 23727]", "[9381, 13424, 9200, 23685, 11400, 17985, 19165, 15472, 10891, 12829, 17307, 9775]");
