"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var typeorm_1 = require("typeorm");
var post_1 = require("./post");
var user_1 = require("./user");
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Comment.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return post_1.UserPost; }, function (userPost) { return userPost.comments; }, { cascade: true, onDelete: "CASCADE" }),
        __metadata("design:type", post_1.UserPost)
    ], Comment.prototype, "userPost", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Comment.prototype, "createdTime", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.User; }, function (user) { return user.comments; }),
        __metadata("design:type", user_1.User)
    ], Comment.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 4000 }),
        __metadata("design:type", String)
    ], Comment.prototype, "comment", void 0);
    Comment = __decorate([
        (0, typeorm_1.Entity)()
    ], Comment);
    return Comment;
}(typeorm_1.BaseEntity));
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map