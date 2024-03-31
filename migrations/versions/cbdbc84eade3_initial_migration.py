"""Initial migration.

Revision ID: cbdbc84eade3
Revises: 
Create Date: 2024-03-31 05:58:40.466873

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cbdbc84eade3'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('retailer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('retailer_name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('image_path', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('picture', sa.String(length=255), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('gender', sa.String(length=10), nullable=False),
    sa.Column('password', sa.String(length=128), nullable=True),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.Column('height', sa.Float(), nullable=True),
    sa.Column('picture_id', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('picture_id')
    )
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_name', sa.String(length=100), nullable=False),
    sa.Column('image_path', sa.String(length=255), nullable=True),
    sa.Column('image_id', sa.String(length=255), nullable=False),
    sa.Column('sustainable', sa.Boolean(), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('brand', sa.String(length=50), nullable=True),
    sa.Column('category', sa.String(length=50), nullable=True),
    sa.Column('price', sa.Float(), nullable=False),
    sa.Column('color', sa.String(length=50), nullable=True),
    sa.Column('gender', sa.String(length=10), nullable=True),
    sa.Column('material', sa.String(length=50), nullable=True),
    sa.Column('size', sa.String(length=50), nullable=True),
    sa.Column('retailer_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['retailer_id'], ['retailer.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('image_id')
    )
    op.create_table('tryonlist',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'product_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tryonlist')
    op.drop_table('product')
    op.drop_table('user')
    op.drop_table('retailer')
    # ### end Alembic commands ###
