import assert from 'assert';
import Friend from 'js/friend';

describe('test Friend', () => {
  it('getName()', () => {
    const friend = new Friend('Taro');
    assert.equal('This is Taro', friend.getName());
  });
});
