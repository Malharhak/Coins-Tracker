define(["maths/Vector2", "components/Component", "components/ComponentType"], 
function (Vector2, Component, ComponentType) {

    var Transform = function (entity) {
        this.entity = entity;
        this._addToWorld();
        
        this.position = new Vector2();
        this.rotation = 0;
        this.scale = 1;
        this._addToWorld();
    };
    Transform.prototype.componentType = ComponentType.Transform;
    _.extend(Transform.prototype, Component.prototype);

    Transform.prototype.translate = function (translationVector) {
        this.position.add(translationVector);
    };

    Transform.prototype.rotate = function (rotationAmount) {
        this.rotation += rotationAmount;
    };

    Transform.prototype.setParent = function (parent) {
        this.parent = parent;
        parent.children = this;
    };
    // World attributes are the local position, rotation, scale,
    // But with the parent's attributes added to them 
    Transform.prototype.getWorldPosition = function () {
        var worldPosition = new Vector2(this.position);
        if (typeof this.parent == "object") {
            worldPosition = worldPosition.add(this.parent.getWorldPosition());
        }
        return worldPosition;
    };

    Transform.prototype.getWorldRotation = function () {
        var worldRotation = this.rotation;
        if (typeof this.parent == "object") {
            worldRotation = worldRotation + this.parent.getWorldRotation();
        }
        return worldRotation;
    };

    Transform.prototype.getWorldScale = function () {
        var worldScale = this.scale;
        if (typeof this.parent == "object") {
            worldScale = worldScale * this.parent.getWorldScale();
        }
        return worldScale;
    };

    return Transform;
});