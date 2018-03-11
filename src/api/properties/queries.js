class PropertyQueries {
    static find() {
        return `
            SELECT  pro.id as id,
                    pro.host as host,
                    pro.address as address,
                    pro.airbnbId as airbnbId,
                    pro.numberOfBedrooms as numberOfBedrooms,
                    pro.numberOfBathrooms as numberOfBathrooms,
                    pro.incomeGenerated as incomeGenerated
            FROM    property as pro
            WHERE   1 = 1
            {% if id -%}
            AND     pro.id = :id
            {% endif -%}
            `
    }

    static create() {
        return `
            INSERT INTO property (id, host, address, airbnbId, numberOfBedrooms, numberOfBathrooms, incomeGenerated) VALUES 
            (
                :id,
                :host,
                :address,
                :airbnbId,
                :numberOfBedrooms,
                :numberOfBathrooms,
                :incomeGenerated
            )
        `
    }

    static update() {
        return `
            UPDATE property pro 
            SET 
                pro.host = :host,
                pro.address = :address,
                pro.address = :airbnbId,
                pro.address = :numberOfBedrooms,
                pro.address = :numberOfBathrooms,
                pro.address = :incomeGenerated
            WHERE pro.id = :id
        `
    }

    static remove() {
        return 'DELETE FROM property WHERE id = :id'
    }
}

module.exports = exports = PropertyQueries
