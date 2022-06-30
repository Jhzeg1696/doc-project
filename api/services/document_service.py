import mysql.connector

def get_data():
     # Creating the connection
    database = mysql.connector.connect(
        host="45.33.20.87",
        user="test",
        password="test",
        database="test"
    )

    cursor = database.cursor(dictionary=True)
    
    cursor.execute("SELECT * FROM document")

    results = cursor.fetchall()

    return results

def get_document(id):
     # Creating the connection
    database = mysql.connector.connect(
        host="45.33.20.87",
        user="test",
        password="test",
        database="test"
    )

    cursor = database.cursor(dictionary=True)
    
    cursor.execute("SELECT * FROM document WHERE document_id = %s", (int(id),))

    results = cursor.fetchone()

    return results

def save_data(
    propertie1, 
    propertie2, 
    propertie3,
    propertie4, 
    propertie5, 
    propertie6, 
    propertie7, 
    propertie8, 
    propertie9, 
    propertie10, 
    propertie11, 
    propertie12, 
    propertie13, 
    propertie14, 
    propertie15, 
    propertie16, 
    propertie17, 
    propertie18, 
    propertie19, 
    ):
    database = mysql.connector.connect(
        host="45.33.20.87",
        user="test",
        password="test",
        database="test"
    )

    cursor = database.cursor()

    try:
        sql = """
            INSERT INTO document (
                propertie1,
                propertie2,
                propertie3,
                propertie4,
                propertie5,
                propertie6,
                propertie7,
                propertie8,
                propertie9,
                propertie10,
                propertie11,
                propertie12,
                propertie13,
                propertie14,
                propertie15,
                propertie16,
                propertie17,
                propertie18,
                propertie19
                ) VALUES (%s,%s, %s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        cursor.execute(
            sql, 
            (
                propertie1,
                propertie2,
                propertie3,
                propertie4,
                propertie5,
                propertie6,
                propertie7,
                propertie8,
                propertie9,
                propertie10,
                propertie11,
                propertie12,
                propertie13,
                propertie14,
                propertie15,
                propertie16,
                propertie17,
                propertie18,
                propertie19,
            ))

        database.commit()

        return {"id": cursor.lastrowid, "status": True}
    except Exception as e:
        print(str(e))
        return {"id": 0, "status": False}

def update_document(
    id,
    propertie1, 
    propertie2, 
    propertie3,
    propertie4, 
    propertie5, 
    propertie6, 
    propertie7, 
    propertie8, 
    propertie9, 
    propertie10, 
    propertie11, 
    propertie12, 
    propertie13, 
    propertie14, 
    propertie15, 
    propertie16, 
    propertie17, 
    propertie18, 
    propertie19, 
    ):
    database = mysql.connector.connect(
        host="45.33.20.87",
        user="test",
        password="test",
        database="test"
    )

    cursor = database.cursor()

    try:
        sql = """
            UPDATE document 
               SET propertie1 = %s,
                propertie2 = %s,
                propertie3 = %s,
                propertie4 = %s,
                propertie5 = %s,
                propertie6 = %s,
                propertie7 = %s,
                propertie8 = %s,
                propertie9 = %s,
                propertie10 = %s,
                propertie11 = %s,
                propertie12 = %s,
                propertie13 = %s,
                propertie14 = %s,
                propertie15 = %s,
                propertie16 = %s,
                propertie17 = %s,
                propertie18 = %s,
                propertie19 = %s
                WHERE document_id = %s
        """

        cursor.execute(
            sql, 
            (
                propertie1,
                propertie2,
                propertie3,
                propertie4,
                propertie5,
                propertie6,
                propertie7,
                propertie8,
                propertie9,
                propertie10,
                propertie11,
                propertie12,
                propertie13,
                propertie14,
                propertie15,
                propertie16,
                propertie17,
                propertie18,
                propertie19,
                id
            ))

        database.commit()

        return {"id": cursor.lastrowid, "status": True}
    except Exception as e:
        print(str(e))
        return {"id": 0, "status": False}