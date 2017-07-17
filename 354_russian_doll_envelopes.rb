# @param {Integer[][]} envelopes
# @return {Integer}
def max_envelopes(envelopes)
  fits_hash = {}

  envelopes.each do |env1|
    fit_inside = []
    envelopes.each do |env2|
      fit_inside << env2 if env2[0] < env1[0] && env2[1] < env1[1]
    end
    fits_hash[env1] = fit_inside
  end

  path_hash = {}

  envelopes.each do |env|
    depth_first_search(env, fits_hash, path_hash)
  end

  longest_path = path_hash.values.max_by(&:length)
  return 0 unless longest_path
  longest_path.length
end

def depth_first_search(cur_node, adjacency_hash, path_hash, cur_path = [])
  path = cur_path + [cur_node]
  next_nodes = adjacency_hash[cur_node]

  next_nodes.each do |next_node|
    depth_first_search(next_node, adjacency_hash, path_hash, path)
  end
  path_hash[cur_node] = path if !path_hash[cur_node] || path_hash[cur_node].length < path.length
end

p max_envelopes([[33,23],[43,3],[10,43],[42,29],[5,34],[41,14],[40,14],[5,37],[25,6],[7,2],[34,47],[46,40],[7,6],[41,40],[16,36],[41,30],[18,31],[21,42],[10,5],[40,29],[8,12],[36,13],[47,8],[3,8],[38,18],[2,48],[15,29],[17,4],[30,47],[32,36],[8,49],[11,41],[34,22],[1,48],[4,1],[42,35],[33,9],[3,16],[29,30],[18,13],[30,11],[6,43],[4,16],[32,15],[11,50],[13,21],[40,28],[36,21],[39,26],[32,31],[25,8],[40,28],[30,22],[20,42],[43,18],[19,40],[45,9],[50,12],[50,38],[41,27],[47,14],[8,39],[40,45],[38,34],[33,5],[14,37],[35,15],[7,6],[38,47],[43,46],[30,29],[36,49],[4,18],[28,47],[50,31],[10,34],[40,31]])
