"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryList = void 0;
exports.queryList = {
    AUDIT_QUERY: "INSERT INTO AUDIT (AUDIT_ACTION, AUDIT_DATA, AUDIT_STATUS, AUDIT_ERROR , AUDIT_BY, AUDIT_ON) VALUES($1, $2, $3, $4, $5, $6)RETURNING *"
};
